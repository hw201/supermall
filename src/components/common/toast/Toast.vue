<template>
  <div class="toast" v-show="isshow">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      msg: "",
      isshow: false,
    };
  },
  methods: {
    show(msg = "默认弹窗文字", duration = 2000) {
      // console.log("---");
      /* 点击假如购物车的时候显示弹窗加默认弹窗文字 */
      this.isshow = true;
      this.msg = msg;

      /* 两秒后关闭弹窗，msg为空 */
      setTimeout(() => {
        this.isshow = false;
        this.msg = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  color: white;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: rgb(0, 0, 0, 0.6);
}
</style>