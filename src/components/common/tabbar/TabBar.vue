<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background: rgb(243, 243, 243);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 12px;
}
</style>