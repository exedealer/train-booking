import { once } from 'node:events';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { createAdaptorServer } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { pgpool } from 'pgwire';

await main();

async function main() {
  // TODO env
  await using pg = pgpool('postgres://web@postgres:5432/postgres?_poolSize=2');
  const app = new Hono();
  app.use(logger());
  app.use((ctx, next) => (ctx.env.pg = pg, next()));

  app.get('/', serveStatic({ path: './ui/home.html' }));
  app.post('/api/search_stations', api_search_stations);
  app.post('/api/search_trains', api_search_trains);
  app.post('/api/get_seats', api_get_seats);
  app.post('/api/book_seat', api_book_seat);

  app.use('/favicon.ico', serveStatic({ path: './ui/favicon.ico' }));
  app.use(serveStatic({ root: './ui' }));

  const server = createAdaptorServer(app);
  process.on('SIGTERM', _ => server.close());
  server.listen(8000);
  console.log('listening');
  await once(server, 'close');
}

async function api_search_stations(ctx) {
  const { pg } = ctx.env;
  const { prefix } = await ctx.req.json();

  const [res] = await pg.query({
    params: [{ type: 'text', value: prefix }],
    statement: /*sql*/ `
      with top_hits as (
        select jsonb_build_object(
          'station_id', station_id,
          'name', name
        )
        from station
        where lower(name) like lower($1) || '%' -- TODO escape
        order by name
        limit 10
      )
      select json_agg(it order by it['name'])
      from top_hits _(it)
    `,
  });

  return ctx.json(res || []);
}

async function api_search_trains(ctx) {
  const { pg } = ctx.env;
  const { from_id, to_id, date } = await ctx.req.json();

  const [res] = await pg.query({
    params: [
      { type: 'text', value: from_id },
      { type: 'text', value: to_id },
      { type: /*date*/ 1082, value: date },
    ],
    statement: /*sql*/ `
     -- TODO actualy it's not a train, but trip segment.
     -- gpt says that there are some self crossing routes in europe,
     -- so there may be more than one option per train.
     -- need a better name
      with top_trains as (
        select json_build_object(
          'train_id', t.train_id::text,
          'name', t.name,
          'train_start', train_start,
          'span', span,
          'from_station', st_dep.name,
          'to_station', st_arr.name,
          'duration_minutes', duration_m,
          'departure', (train_start at time zone st0.tz + s_dep.dep_offset) at time zone st_dep.tz,
          'arrival', (train_start at time zone st0.tz + s_arr.arr_offset) at time zone st_arr.tz,
          'price', (s_arr.price - s_dep.price)::numeric::text
        )
        from train t
        -- origin station (first stop)
        join stop s0 on s0.train_id = t.train_id and s0.stop_order = 0 -- TODO min(stop_order)
        join station st0 on st0.station_id = s0.station_id
        -- find stop a and stop b on this train
        join stop s_dep on s_dep.train_id = t.train_id
        join stop s_arr on s_arr.train_id = t.train_id
        join station st_dep on st_dep.station_id = s_dep.station_id
        join station st_arr on st_arr.station_id = s_arr.station_id
        , int4(extract(epoch from s_arr.arr_offset - s_dep.dep_offset) / 60) duration_m
        , int4range(s_dep.stop_order, s_arr.stop_order) span
        -- lower bound of the time window in which the train
        -- must depart (from its origin) to arrive at the passenger's
        -- boarding station on the date chosen by the passenger
        , pg_catalog.timestamp(
          ($3 - s_dep.dep_offset) -- TODO date_subtract
          at time zone st_dep.tz
          at time zone st0.tz
        ) train_start_low
        -- after applying the station's time offset and timezone,
        -- this window spans two dates, so knowing the train's departure time,
        -- we need to determine on which of the two days the train actually departs
        , pg_catalog.timestamp(
          train_start_low::date
          + int4(train_start_low::time > t.dep_time)
          + t.dep_time
        ) train_start
        where (s_dep.station_id, s_arr.station_id) = ($1, $2)
          -- TODO do we need support ring-looped routes?
          -- seems it's unlikely for long-distance trains
          and s_dep.stop_order < s_arr.stop_order
          and get_bit(t.weekdays, extract(isodow from train_start)::int - 1) = 1
        order by duration_m
        limit 10
      )
      select json_agg(it order by int4(it->>'duration_minutes'))
      from top_trains _(it)
    `,
  });

  return ctx.json(res || []);
}

async function api_get_seats(ctx) {
  const { pg } = ctx.env;
  const params = await ctx.req.json();

  const [res] = await pg.query({
    params: [{ type: 'jsonb', value: params }],
    statement: /*sql*/ `
      select jsonb_build_object(
        -- TODO available seats and train formation
        'occupied', array(
          select seat
          from booking
          where train_id = ($1->>'train_id')::int4
            and train_start = ($1->>'train_start')::timestamp
            and span && ($1->>'span')::int4range
        )
      )
    `,
  });
  return ctx.json(res);
}

async function api_book_seat(ctx) {
  const { pg } = ctx.env;
  const params = await ctx.req.json();
  // TODO email input
  params.passenger = ctx.env.incoming.socket.remoteAddress;
  const [res] = await pg.query({
    params: [{ type: 'jsonb', value: params }],
    statement: /*sql*/ `
      with insert_cte as (
        insert into booking (train_id, train_start, span, seat, passenger)
        values (
          ($1->>'train_id')::int4,
          ($1->>'train_start')::timestamp,
          ($1->>'span')::int4range,
          $1->>'seat',
          $1->>'passenger'
        )
        on conflict on constraint no_overlapping_bookings do nothing
        returning booking_id

      )
      , result_cte (success, booking_id) as (
        select true, booking_id from insert_cte union all
        select false, null
        order by 1 desc
        limit 1
      )
      select jsonb_build_object(
        'success', success,
        'booking_id', booking_id,
        'seat', $1->>'seat'
      ) from result_cte
    `,
  });

  return ctx.json(res);
}
