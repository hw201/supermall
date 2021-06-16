<template>
  <div id="car">
    <nav-bar class="car"
      ><div slot="center">购物车({{ cartLength }})</div></nav-bar
    >
    <carlist />
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import carlist from "./childcar/carlist.vue";

export default {
  components: { NavBar, carlist },
  name: "Car",
  computed: {
    // cartlength(){
    //   return this.$store.state.cartList.length
    // }
    // 上面调用时{{cartlength}}也可以直接在上面$store.state.cartList.length，不用计算属性
    ...mapGetters(["cartLength"]),
    /* 在getter.js文件里 */
  },
};
</script>

<style scoped>
.car {
  background: pink;
  color: white;
}
</style>