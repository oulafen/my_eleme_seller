<template>
  <div>
    <v-header></v-header>
    <div class="tabs">
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
  </div>
</template>

<script>
  import 'reset-css';
  import  header from 'components/header/header';
  export default {
    name: 'app',
    components: {
      "v-header": header
    }

  }
</script>

<style scoped lang="sass">
  @import "assets/css/tab.scss";
</style>
