<template>
  <div class="detailstore">
    <img src="@/assets/img/04.png" />
    <div class="content">{{ storeName }}</div>
  </div>
</template>

<script>
export default {
  name: "detailstore",
  props: {
    storeName: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>

<style scoped>
.detailstore {
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  position: absolute;
}
img {
  height: 80px;
  width: 80px;
}
.content {
  position: relative;
  left: 120px;
  top: -80px;
}
</style>