<template>
  <div>
    <v-header :store="store"></v-header>
    <div class="tabs border-1px">
      <div class="tab">
        <router-link to="/goods"><span>商品</span></router-link>
      </div>
      <div class="tab">
        <router-link to="/ratings"><span>评价</span></router-link>
      </div>
      <div class="tab">
        <router-link to="/store"><span>店铺</span></router-link>
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">
      <v-shopcart></v-shopcart>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'reset-css';
  import  header from 'components/header/header';
  import  shopcart from 'components/shopcart/shopcart';

  const ERR_OK = 0;

  export default {
    name: 'app',
    data () {
      return {
        goods: {},
        store: {}
      }
    },
    created() {
      var self = this;
      this.$http.get('/api/store').then((res) => {
        res = res.body;
        if(res.err_code == ERR_OK){
          self.store = res.data;
//          self.goods = res.goods;
        }
      }, () => {

      })
    },
    components: {
      "v-header": header,
      "v-shopcart": shopcart,
    }

  }
</script>

<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
  @import "assets/css/tab.scss";
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
