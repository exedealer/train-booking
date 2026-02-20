import { createElement as h, useState, useEffect, useRef, useCallback } from '../../vendor/react.js';
import { call_api } from '../../store.js';

// TODO it is actually a dropdown, value selected by clicking list item.
// But the component looks like a text input:
// text value is not an actual component value, but just a query for menu items

export default function StationInput({ label, on_select, placeholder }) {
  // const [query, set_query] = useState('');
  const [results, set_results] = useState([]);
  const [open, set_open] = useState(false);
  const [display, set_display] = useState('');
  const timer_ref = useRef(null);
  const wrapper_ref = useRef(null);

  useEffect(_ => {
    const handle_click = e => {
      if (wrapper_ref.current && !wrapper_ref.current.contains(e.target)) set_open(false);
    };
    document.addEventListener('mousedown', handle_click);
    return _ => document.removeEventListener('mousedown', handle_click);
  }, []);

  // TODO fix race
  const handle_change = useCallback(e => {
    const val = e.target.value;
    // set_query(val);
    set_display(val);
    on_select(null);

    clearTimeout(timer_ref.current);
    if (!val.length) {
      set_results([]);
      set_open(false);
      return;
    }

    timer_ref.current = setTimeout(async _ => {
      const data = await call_api('search_stations', { prefix: val });
      set_results(data);
      set_open(data.length > 0);
    }, 120);
  }, [on_select]);

  const handle_select = useCallback(station => {
    set_display(station.name);
    // set_query('');
    set_results([]);
    set_open(false);
    on_select(station);
  }, [on_select]);

  return h('div', { className: 'station_input', ref: wrapper_ref },
    h('input', {
      className: 'station_input-input',
      type: 'text',
      value: display,
      placeholder,
      onChange: handle_change,
      onFocus: _ => results.length && set_open(true),
    }),
    // TODO handle ArrowDown key, keyboard nav over dropdown
    open && h('div', { className: 'station_input-dropdown' },
      results.map(s => h('button',
        {
          key: s.station_id,
          className: 'station_input-item',
          onClick: _ => handle_select(s), // TODO return focus to query input
        },
        s.name,
        h('span', { className: 'station_input-item_code' }, s.station_id),
      )),
    ),
  );
}
