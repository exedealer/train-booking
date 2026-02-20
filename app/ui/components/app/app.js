import { createElement as h } from '../../vendor/react.js';
import { useStore } from '../../store.js';
import TrainsList from '../trains_list/trains_list.js';
import SeatPicker from '../seat_picker/seat_picker.js';
import SearchForm from '../search_form/search_form.js';
import Confirmation from '../confirmation/confirmation.js';

export default function App() {

  // TODO step:
  // searing
  // picking
  // done
  const selected_train = useStore(s => s.selected_train);
  const booking_result = useStore(s => s.booking_result);
  const has_searched = useStore(s => s.has_searched);


  return h('div', { className: 'app_shell' },
    h('div', { className: 'app_shell-logo' }, 'rail', h('span', null, '.')),

    // Search form
    h(SearchForm),

    // Booking confirmation
    booking_result && h(Confirmation),

    // Seat picker
    !booking_result && selected_train && h(SeatPicker),

    // Train list
    !booking_result && !selected_train && has_searched && h(TrainsList),
  );
}
