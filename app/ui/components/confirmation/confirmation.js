import { createElement as h } from '../../vendor/react.js';
import { useStore } from '../../store.js';

export default function Confirmation() {
  const selected_train = useStore(s => s.selected_train);
  const booking_result = useStore(s => s.booking_result);
  const reset = useStore(s => s.reset);

  return h('div', { className: 'confirmation fade_in' },
    h('div', { className: 'confirmation-check' }, '✓'),
    h('div', { className: 'confirmation-title' }, 'Booking Confirmed'),
    h('div', { className: 'confirmation-details' },
      `Booking ID: ${booking_result.booking_id}`,
      h('br'),
      `Train: ${selected_train.name}`,
      h('br'),
      `${selected_train.from_station} → ${selected_train.to_station}`,
      h('br'),
      `Car/Seat: ${booking_result.seat}`,
    ),
    h('button',
      { className: 'confirmation-reset_btn', onClick: reset },
      'New Booking',
    ),
  );
}
