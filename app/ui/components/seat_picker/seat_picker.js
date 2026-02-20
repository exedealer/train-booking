import { createElement as h, useState, useCallback } from '../../vendor/react.js';
import { useStore } from '../../store.js';
import Spinner from '../spinner/spinner.js';

export default function SeatPicker() {
  const train = useStore(s => s.selected_train);
  const booking = useStore(s => s.booking);
  const selected_seats = useStore(s => s.selected_seats);
  const occupied_seats = useStore(s => s.occupied_seats);
  const booking_conflict = useStore(s => s.booking_conflict);
  const toggle_seat = useStore(s => s.toggle_seat);
  const clear_selected_seats = useStore(s => s.clear_selected_seats);
  const book_seats = useStore(s => s.book_seats);
  const can_book_seats = !selected_seats.length || booking;
  const [selected_car, set_selected_car] = useState(1);

  // TODO should not calc actual cost with floats
  const cost = selected_seats.length * train.price || null;

  const select_car = useCallback(car => {
    set_selected_car(car);
    clear_selected_seats();
  }, []);

  const seats_elems = Array(4 * 7).fill(null).map((_, z_num) => {
    const num = z_num + 1;
    const seat_key = selected_car + '/' + num; // TODO escape
    const is_occupied = Object.hasOwn(occupied_seats, seat_key);
    const is_selected = selected_seats.includes(seat_key);
    return h('button', {
      key: seat_key,
      className: 'seat_picker-seat',
      disabled: is_occupied,
      'aria-selected': is_selected ? 'true' : 'false',
      'aria-label': `Seat ${num}`,
      onClick: _ => toggle_seat(seat_key),
    }, num);
  });

  return h('div', { className: 'seat_picker fade_in' },
    h('div', { className: 'seat_picker-heading' }, `Select Seats — ${train.name}`),

    h('div', { className: 'seat_picker-cars' },
      [1, 2, 3, 4, 5].map(car =>
        h('button', {
          key: car,
          className: 'seat_picker-car_tab',
          'aria-selected': selected_car == car ? 'true' : 'false',
          onClick: _ => select_car(car),
        }, `Car ${car}`)
      )
    ),

    h('div', { className: 'seat_picker-grid' }, seats_elems),

    h('div', { className: 'seat_picker-legend' },
      h('span', { className: 'seat_picker-legend_item' },
        h('span', { className: 'seat_picker-legend_swatch', style: { background: 'var(--color-seat-available)' } }),
        'Available'
      ),
      h('span', { className: 'seat_picker-legend_item' },
        h('span', { className: 'seat_picker-legend_swatch', style: { background: 'var(--color-seat-selected)' } }),
        'Selected'
      ),
      h('span', { className: 'seat_picker-legend_item' },
        h('span', { className: 'seat_picker-legend_swatch', style: { background: 'var(--color-seat-taken)', opacity: 0.4 } }),
        'Taken'
      ),
    ),

    h('div', { className: 'seat_picker-actions' },
      !booking_conflict && h('div', { className: 'seat_picker-selection_info' },
        'Click seats to select'
      ),
      booking_conflict && h('div', { className: 'seat_picker-selection_conflict' },
        'Oops — someone beat you to this seat! Please pick another available one.'
      ),
      h('div', { className: 'seat_picker-cost' },
        cost != null && [
          cost,
          ' ',
          h('span', { className: 'seat_picker-price_curr' }, '€'),
        ],
      ),
      h('button',
        {
          className: 'seat_picker-book_btn',
          disabled: can_book_seats,
          onClick: _ => book_seats({ selected_seats }),
        },
        !booking && 'Book Seat',
        booking && [h(Spinner), 'Booking…'],
      ),
    ),
  );
};
