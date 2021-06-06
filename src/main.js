import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App,
  },
  store,
  router
})
