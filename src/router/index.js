import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Data from '../json/data.json';

const goods = Data.goods;
const ratings = Data.ratings;
const store = Data.store;

Vue.use(VueRouter);

var hostUrl = 'http://statics.oulafen.com/my_eleme_seller/img/';

function processUrlStr(url) {
  return url.slice(3);
}


const routes = [
  {path: '/', component: {template: '<div> go to <router-link to="/hello">hello world</router-link></div>'}},
  {path: '/hello', component: HelloWorld},
  {path: '/goods', component: {template: '<div>goods</div>'}},
  {path: '/ratings', component: {template: '<div>ratings</div>'}},
  {path: '/store', component: {template: '<div>store</div>'}}
];

export default new VueRouter({
  routes
})
