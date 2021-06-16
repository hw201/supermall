<template>
  <div class="dapp">
    <div><img src="@/assets/img/08.png" /><span>我的购物车</span></div>

    <div><img src="@/assets/img/07.png" /><span>下载购物APP</span></div>
  </div>
</template>

<script>
export default {
  name: "profilecar",
};
</script>

<style scoped>
.dapp {
  position: relative;
  width: 100%;
  padding: 15px 5px;
}
span {
  font-size: 17px;
  padding: 0px 10px;
}
img {
  width: 20px;
  height: 20px;
}
.dapp div {
  margin: 15px 10px;
}
</style>