import { createElement as h } from '../../vendor/react.js';
import { useStore } from '../../store.js';
import StationInput from '../station_input/station_input.js';
import Spinner from '../spinner/spinner.js';


export default function SearchForm() {
  const from_station = useStore(s => s.from_station);
  const set_from_station = useStore(s => s.set_from_station);
  const to_station = useStore(s => s.to_station);
  const set_to_station = useStore(s => s.set_to_station);
  const date = useStore(s => s.date);
  const set_date = useStore(s => s.set_date);
  const searching = useStore(s => s.searching);
  const search_trains = useStore(s => s.search_trains);


  return h('div', { className: 'search_form' },

    h('div', { className: 'search_form-field' },
      h('label', { className: 'search_form-label' }, 'From'),
      h(StationInput, {
        placeholder: 'Departure city',
        value: from_station,
        on_select: set_from_station,
      }),
    ),

    h('div', { className: 'search_form-field' },
      h('label', { className: 'search_form-label' }, 'To'),
      h(StationInput, {
        placeholder: 'Arrival city',
        value: to_station,
        on_select: set_to_station,
      }),
    ),
    h('div', { className: 'search_form-field' },
      h('label', { className: 'search_form-label' }, 'Date'),
      h('input', {
        className: 'search_form-input',
        type: 'date',
        value: date,
        min: today,
        onChange: e => set_date(e.target.value),
      }),
    ),
    h('button',
      {
        className: 'search_form-button',
        disabled: !from_station || !to_station || !date || searching,
        onClick: search_trains,
      },
      searching ? h(Spinner) : 'Search',
    ),
  );
}

const today = new Date().toISOString().split('T')[0];
