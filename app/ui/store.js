import { zustandCreate } from './vendor/react.js';

export const useStore = zustandCreate((set, get) => ({
  // searching trains
  from_station: null,
  to_station: null,
  date: get_initial_date(),
  searching: false,
  has_searched: false,

  // trains list
  trains: [],

  // seat picking
  selected_train: null,
  selected_seats: [],
  occupied_seats: {},
  booking_conflict: false,
  booking: false,

  // final screen
  booking_result: null,

  set_from_station: from_station => set({ from_station }),
  set_to_station: to_station => set({ to_station }),
  set_date: date => set({ date }),
  set_booking_result: booking_result => set({ booking_result }),

  search_trains: async _ => {
    const { from_station, to_station, date } = get();

    // TODO can_search_trains
    // if (!from_station || !to_station || !date) return;

    set({
      searching: true,
      selected_train: null,
      booking_result: null,
    });

    // TODO error handling
    let trains;
    try {
      trains = await call_api('search_trains', {
        from_id: from_station.station_id,
        to_id: to_station.station_id,
        date,
      });
    } finally {
      set({ searching: false });
    }

    set({ trains, has_searched: true });
  },

  select_train: async selected_train => {
    const { update_occupied_seats } = get();
    set({ selected_train });
    await update_occupied_seats();
  },

  clear_selected_seats: _ => set({
    selected_seats: [],
    booking_conflict: false,
  }),

  toggle_seat: seat => set(prev => ({
    booking_conflict: false,
    // TODO multiple seats per booking
    selected_seats: prev.selected_seats.includes(seat)
      ? prev.selected_seats.filter(s => s != seat)
      : [seat],
  })),

  book_seats: async ({ selected_seats }) => {
    const {
      selected_train,
      update_occupied_seats,
      clear_selected_seats,
    } = get();

    let booking_result;
    set({ booking: true });
    try {
      booking_result = await call_api('book_seat', {
        train_id: selected_train.train_id,
        train_start: selected_train.train_start,
        span: selected_train.span,
        seat: selected_seats[0],
      });
    } finally {
      set({ booking: false });
    }

    if (booking_result.success) {
      set({ booking_result });
    } else {
      await update_occupied_seats();
      clear_selected_seats();
      set({ booking_conflict: true });
    }
  },

  update_occupied_seats: async _ => {
    const { selected_train } = get();
    const { occupied } = await call_api('get_seats', {
      train_id: selected_train.train_id,
      train_start: selected_train.train_start,
      span: selected_train.span,
    });
    const occupied_seats = Object.fromEntries(occupied.map(s => [s, true]));
    set({ occupied_seats });
  },

  reset: _ => set({
    selected_train: null,
    booking_result: null,
    trains: [],
    has_searched: false,
    selected_seats: [],
    occupied_seats: {},
    booking_conflict: false,
  }),
}));

function get_initial_date() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

export async function call_api(endpoint, params) {
    const resp = await fetch('/api/' + endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(params),
  });
  if (!resp.ok) {
    throw Error(`api ${endpoint} error`, { cause: resp });
  }
  return await resp.json();
}
