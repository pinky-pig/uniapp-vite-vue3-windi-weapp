import { createSSRApp } from "vue";
import App from "./App.vue";

import { setupWindiCSS, setupIconfont } from '@/setup';
import { setupStore } from '@/store';

export function createApp() {
  const app = createSSRApp(App);

  setupWindiCSS(app)
  setupIconfont(app)
  setupStore(app)

  return {
    app,
  };
}
