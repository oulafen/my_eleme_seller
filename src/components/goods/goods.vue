<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" :class="{active: item.is_selected}">
          <img class="icon" :src="item.icon_url | formatImageUrl" v-if="item.icon_url" />
          <span class="text">{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul v-if="goods[0]">
        <li v-for="item in goods[0].foods">
          <img class="img" :src="item.image_path | formatImageUrl" alt="">
          <div class="info-box">
            <h2 class="title">{{item.name}}</h2>
            <p class="desc">月售{{item.month_sales}}份 好评率{{item.satisfy_rate}}%</p>
            <div class="prize-box">
              <span class="rmb-label"></span>{{item.specfoods.prize}}
              <span class="rmb-label"></span>{{item.specfoods.prize}}
            </div>
            <div class="cards">

            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">

  const ERR_OK = 0;
  export default {

    data () {
      return {
        goods: []
      }
    },
    created() {
      const self = this;
      this.$http.get('/api/goods').then((res) => {
         res = res.body;
        if(res.err_code == ERR_OK){
          self.goods = res.data;
        }
      })
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .goods {
    display: flex;
    position: absolute;
    top: 10.5rem;
    bottom: 30px;
    overflow: hidden;
  }

  .goods .menu-wrapper {
    flex: 0 0 5rem;
    width: 5rem;
    background-color: #f3f3f3;
    overflow-y: scroll;
  }
  .goods .menu-wrapper li{
    line-height: 1;
    padding: 1.1rem 0.8rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
    color: #666;
    font-size: 0.8rem;
  }
  .goods .menu-wrapper li.active{
    background-color: #fff;
    color: #333;
  }
  .goods  .menu-wrapper li img{
    height: 0.8rem;
    vertical-align: top;
  }
  .goods .foods-wrapper{
    padding: 0 0.75rem;
    overflow-y: scroll;
  }
  .goods .foods-wrapper .info-box{
    margin-left: 5rem;
  }
  .goods .foods-wrapper li {
    position: relative;
    margin: 0.75rem 0;
    border-bottom: 1px solid #ddd;
    height: 6rem;
  }
  .goods .foods-wrapper li .img{
    float: left;
    width: 4.5rem;
    height: 4.5rem;
    margin-right: .3rem;
    border-radius: .2rem;
  }
  .goods .foods-wrapper li .title{
    font-size: 0.9rem;
    font-weight: 700;
    color: #333;
    line-height: 1.2;
  }
  .goods .foods-wrapper li .desc{
    font-size: 0.65rem;
    color: #999;
    line-height: 1;
    margin: 0.7rem 0 ;
  }
  .goods .foods-wrapper li .prize-box{
    position: absolute;
    bottom: 0;
  }

</style>
