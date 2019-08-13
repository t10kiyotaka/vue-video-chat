import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Socket config
Vue.use(new VueSocketIO({
  debug: true;
  connection: `${url}/video-chat`,
  vuex: {
    store, // Attach the store
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
}))

// Vue source for http
Vue.use(VureResource)

new Vue({
  router,
  store, // Attach the store
  render: h => h(App),
}).$mount('#app')
