import Vue from 'vue';
import VueRouter from 'vue-router';
import Goods from 'components/goods/goods';
import Ratings from 'components/ratings/ratings';
import Store from 'components/store/store';
//import Data from '../json/data.json';
//
//const goods = Data.goods;
//const ratings = Data.ratings;
//const store = Data.store;

Vue.use(VueRouter);
//
//var hostUrl = 'http://statics.oulafen.com/my_eleme_seller/img/';
//
//function processUrlStr(url) {
//  return url.slice(3);
//}

const router = new VueRouter({
  routes : [
    {path: '/', redirect: '/goods'},
    {path: '/goods', component: Goods},
    {path: '/ratings', component: Ratings},
    {path: '/store', component: Store}
  ]
});

export default router;
