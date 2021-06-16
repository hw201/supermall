<template>
  <div class="bottomnav">
    <div class="nav-left">
      <div class="nleft"><span>客服</span></div>
      <div class="nleft"><span>店铺</span></div>
      <div class="nleft"><span>收藏</span></div>
    </div>
    <div class="busr">
      <div class="nright" @click="btnclick"><span>加入购物车</span></div>
      <div class="nright"><span>购买</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailbottomnav",
  methods: {
    btnclick() {
      this.$emit("btnclick");
    },
  },
};
</script>

<style scoped>
.bottomnav {
  position: fixed;
  display: flex;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: #fff;

  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.busr {
  width: 100%;
  display: flex;
}
.nav-left {
  display: flex;
}
.nleft {
  flex: 1;
  height: 44px;
  width: 60px;
  float: left;
  padding: 18px 0px;
  text-align: center;
  background-color: white;
}
.nright {
  flex: 1;
  float: left;
  margin: 0px;
  padding: 18px 16px;
  text-align: center;
  background-color: yellow;
  /* height: 100%; */
}
</style>