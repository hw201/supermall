<template>
  <div id="classify">
    <nav-bar
      ><div slot="left"><</div>
      <div slot="center">分类</div>
      <div slot="right">...</div></nav-bar
    >
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  name: "Classify",
};
</script>

<style>
#classify {
  color: black;
}
</style>