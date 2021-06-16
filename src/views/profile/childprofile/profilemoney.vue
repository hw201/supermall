<template>
  <div class="yangmao">
    <div class="money">
      <div class="mleft"><span>0.00</span>元</div>
      <div><span>我的余额</span></div>
    </div>

    <div class="youhui">
      <div class="mleft"><span>0</span>个</div>
      <div><span>我的优惠</span></div>
    </div>

    <div class="jifen">
      <div class="mleft"><span>0</span>分</div>
      <div><span>我的积分</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profilemoney",
};
</script>

<style scoped>
.yangmao {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  padding: 40px 10px;
  text-align: center;
  box-shadow: 0 12px 1px rgba(100, 100, 100, 0.1);
}
.mleft span {
  color: pink;
}
.money {
  flex: 1;
  text-align: center;
}
.youhui {
  flex: 1;
  text-align: center;
}
.jifen {
  flex: 1;
  text-align: center;
}
span {
  font-size: 17px;
}
</style>