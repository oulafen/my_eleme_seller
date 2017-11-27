import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'assets/css/base.scss'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
