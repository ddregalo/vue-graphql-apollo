import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { createProvider } from "./vue-apollo";
import BootstrapVue from 'bootstrap-vue';
import './css/index.scss';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
