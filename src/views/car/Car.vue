<template>
  <div id="car">
    <nav-bar class="car"><div slot="center">购物车()</div></nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  name: "Car",
};
</script>

<style scoped>
.car {
  background: pink;
  color: white;
}
</style>