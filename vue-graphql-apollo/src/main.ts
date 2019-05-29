import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/css/site.scss';
import './registerServiceWorker';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import VueApollo from 'vue-apollo';
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;
Vue.use(VueApollo);

const restLink = new RestLink({ uri: 'http://localhost:3000/starwars' });

const apolloClient = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $query: {
      fetchPolicy: 'cache-and-network',
    },
  }
});

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  apolloProvider: createProvider(),
  render: (h) => h(App)
}).$mount('#app');
