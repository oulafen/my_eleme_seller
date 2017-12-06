import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

//components
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import store from 'components/store/store';

import 'common/scss/base.scss'
import 'common/js/base_func.js'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes : [
    {path: '/', redirect: '/goods'},
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/store', component: store}
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
