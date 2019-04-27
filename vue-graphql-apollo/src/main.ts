import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import VueApollo from 'vue-apollo';

Vue.config.productionTip = false;
Vue.use(VueApollo);

// const restLink = new RestLink({ uri: 'https://jsonplaceholder.typicode.com/albums/' });
const restLink = new RestLink({ uri: 'http://localhost:3000/starwars' });


const apolloClient = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: (h) => h(App),
}).$mount('#app');
