import { createSSRApp } from "vue";
import App from "./App.vue";

import { setupWindiCSS, setupIconfont } from '@/setup';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';

export function createApp() {
  const app = createSSRApp(App);

  setupWindiCSS(app)
  setupIconfont(app)
  setupStore(app)
  setupRouter(app)

  return {
    app,
  };
}
