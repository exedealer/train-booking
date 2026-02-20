import { createElement as h, createRoot } from './vendor/react.js';
import App from './components/app/app.js'

export function mount_app(el) {
  createRoot(el).render(h(App));
}
