import type { App } from 'vue';
import { createRouterGuard } from './guard';

export async function setupRouter(app: App) {
  createRouterGuard();
}