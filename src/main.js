import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import firebase from 'firebase/app'
import router from './router/router'
import { store } from './store/'
import DateFilter from './filters/date';
import AlertCmp from './components/Shared/Alert.vue'

Vue.config.productionTip = false

Vue.filter('dateFormatter', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: function (h) { return h(App)},
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyCF9pMp0nRqwzZRlDQ9p87vcSMOxYXBbdk",
      authDomain: "meetup-2f936.firebaseapp.com",
      databaseURL: "https://meetup-2f936.firebaseio.com",
      projectId: "meetup-2f936",
      storageBucket: "meetup-2f936.appspot.com",
      messagingSenderId: "242665585159",
      appId: "1:242665585159:web:e7485115890b0bec"
    }),
    firebase.auth().onAuthStateChanged( function (user) {
      if ( user ) {
        const userData = {
          id: user.uid,
          registeredMeetups: []
        }
        store.dispatch('setUser', userData)
      } else {
        console.log('No user is signed in')
      }
    })
  }  
}).$mount('#app')
