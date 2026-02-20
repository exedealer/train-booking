import { createElement as h } from '../../vendor/react.js';
import { useStore } from '../../store.js';

export default function TrainsList() {
  const trains = useStore(s => s.trains);
  const select_train = useStore(s => s.select_train);

  return h('div', { className: 'trains_list' },
    h('div', { className: 'trains_list-heading' }, 'Available Trains'),

    trains.map(t => h(TrainCard, {
      key: t.train_id,
      train: t,
      on_select: select_train,
    })),

    !trains.length && h('div',
      { className: 'trains_list-empty' },
      'No trains found for this route.',
    ),
  );
}

function TrainCard({ train, on_select }) {
  return h('div', { className: 'train_card fade_in', onClick: _ => on_select(train) },
    h('div', { className: 'train_card-name' }, train.name),
    h('div', { className: 'train_card-dep' },
      h('div', { className: 'train_card-time' }, format_time(train.departure)),
      h('div', { className: 'train_card-date' }, format_date(train.departure)),
      // h('div', { className: 'train_card-station' }, train.from_station),
    ),
    h('div', { className: 'train_card-duration' },
      format_duration(train.duration_minutes),
      h('div', { className: 'train_card-duration_line' }),
    ),
    h('div', { className: 'train_card-arr'  },
      h('div', { className: 'train_card-time' }, format_time(train.arrival)),
      h('div', { className: 'train_card-date' }, format_date(train.arrival)),
      // h('div', { className: 'train_card-station' }, train.to_station),
    ),
    h('div', { className: 'train_card-price' },
      h('span', null, train.price),
      ' ',
      h('span', { className: 'train_card-price_curr' }, '€'),
    ),
  );
};

const format_duration = minutes => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m > 0 ? `${m}m` : ''}`.trim();
};

const format_date = d => new Date(d).toLocaleDateString(
  'en-GB',
  { day: 'numeric', month: 'short' }, // → "14 Jun"
);

const format_time = iso => new Date(iso).toLocaleTimeString(
  'en-GB',
  { hour: '2-digit', minute: '2-digit' },
);
