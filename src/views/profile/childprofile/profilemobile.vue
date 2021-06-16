<template>
  <div class="mobile">
    <div class="meimg">
      <img src="@/assets/img/common/55.png" />
    </div>

    <div class="memobile">
      <div><span>登录</span>/<span>注册</span></div>
      <div><span>暂无绑定手机</span></div>
    </div>

    <div class="meaaa"><span>></span></div>
  </div>
</template>

<script>
export default {
  name: "profilemobile",
};
</script>

<style scoped>
.mobile {
  display: flex;
  width: 100%;
  height: 150px;
  background-color: pink;
  font-size: 15px;
  color: white;
}

.meimg {
  /* flex: 1; */
  width: 30%;
  padding: 20px 10px;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.memobile {
  /* flex: 1; */
  width: 50%;
  padding: 50px 20px;
}
.meaaa {
  /* flex: 1; */
  width: 20%;
  padding: 50px 5px;
  text-align: center;
}
</style>