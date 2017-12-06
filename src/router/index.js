import Vue from 'vue';
import VueRouter from 'vue-router';
import Goods from 'components/goods/goods';
import Ratings from 'components/ratings/ratings';
import Store from 'components/store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
    {path: '/', redirect: '/goods'},
    {path: '/goods', component: Goods},
    {path: '/ratings', component: Ratings},
    {path: '/store', component: Store}
  ]
});

export default router;
