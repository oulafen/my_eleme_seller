<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="100%" :src="store.image_path | formatImageUrl" alt="">
      </div>
      <div class="text">
        <h1>{{ store.name }}</h1>
        <p v-if="store.delivery_mode">{{ store.delivery_mode.text }} / {{ store.order_lead_time }}分钟送达 /
          {{store.piecewise_agent_fee.description}}</p>
        <p>公告: {{store.promotion_info}}</p>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <a @click="showDetail" v-if="store.activities" class="activities">
        <span class="icon" :style="{'background-color': '#' + store.activities[0].icon_color}">{{store.activities[0].icon_name}}</span>
        <span class="text">{{store.activities[0].description}}</span>
        <span class="num">{{store.activities.length}}个活动</span>
      </a>
    </div>
    <div class="background">
      <img :src="store.image_path | formatImageUrl" width="100%" height="100%" alt="">
    </div>
    <div class="detail" v-show="detailShow">

      <a @click="hideDetail" class="close"></a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      store: {
        type: Object
      }
    },
    data () {
      return {
        detailShow: false
      }
    },
    methods: {
      showDetail: function(){
        this.detailShow = true;
      },
      hideDetail: function(){
        this.detailShow = false;
      }
    }
  }
</script>

<style scoped>
  .header {
    position: relative;
    color: #fff;
    background-color: rgba(7, 17, 27, 0.5);
  }

  .content-wrapper {
    padding: 2.5rem 1rem;
  }

  .content-wrapper .avatar {
    float: left;
    margin-right: 0.5rem;
    width: 3.5rem;
    height: 3.5rem;
  }

  .content-wrapper .text h1 {
    font-size: 0.9rem;
  }

  .content-wrapper .text p {
    font-size: 0.7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.5rem;
  }

  .bulletin-wrapper {
    position: absolute;
    bottom: 0.5rem;
    left: 1rem;
    right: 1rem;
    font-size: 0.65rem;
  }

  .bulletin-wrapper .icon {
    padding: 0 0.15rem;
    font-size: 0.5rem;
    border-radius: 0.15rem;
    margin-right: 0.15rem;
  }

  .bulletin-wrapper .num {
    float: right;
  }

  .bulletin-wrapper .num:after {
    content: "";
    display: block;
    border-style: solid;
    border-width: .066667rem 0 .066667rem .08rem;
    border-width: .666667vw 0 .666667vw .8vw;
    border-color: transparent transparent transparent #fff;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: -.16rem;
    right: -1.6vw;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(0.5rem);
    overflow: hidden;
  }

  .detail {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(7, 17, 27, .8);
  }
  .detail .close{
    display: block;
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
