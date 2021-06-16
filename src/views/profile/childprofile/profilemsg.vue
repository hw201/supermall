<template>
  <div class="outdiv">
    <div><img src="@/assets/img/02.png" /><span>我的消息</span></div>

    <div><img src="@/assets/img/04.png" /><span>积分商城</span></div>

    <div><img src="@/assets/img/06.png" /><span>会员卡</span></div>
  </div>
</template>

<script>
export default {
  name: "profilemsg",
};
</script>

<style scoped>
.outdiv {
  width: 100%;
  height: 150px;
  box-shadow: 0 12px 1px rgba(100, 100, 100, 0.1);
  position: relative;
  padding: 15px 5px;
}
img {
  width: 20px;
  height: 20px;
}
span {
  font-size: 17px;
  padding: 0px 10px;
}
.outdiv div {
  margin: 15px 10px;
}
</style>