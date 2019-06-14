import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/router'
import { store } from './store/'

Vue.config.productionTip = false

/* eslint-disable  */
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
