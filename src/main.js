// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

// Vue.config.productionTip = false;
OfflinePluginRuntime.install();

/* eslint-disable no-new */
// createApp({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// });
const app = createApp(App);
app.use(router);
app.mount('#app');