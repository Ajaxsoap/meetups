import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#00897B',
    secondary: '#B2DFDB',
    accent: '#00BFA5',
    info: '#B3E5FC',
    warning: '#FFFF00',
    error: '#b71c1c'
  }
})
