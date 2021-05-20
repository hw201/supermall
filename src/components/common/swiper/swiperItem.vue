<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
/* 这里是点击图片里面的内容 */
export default {
  name: "Slide",
};
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
}
</style>