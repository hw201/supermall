<template>
  <div class="details-info">
    <!-- <div class="info">2021新款时尚上衣女</div>
    <div class="info">￥29.00</div>
    <div class="info">销售123</div> -->
    <div class="info">{{ goods.attr1 }}</div>
    <div class="info" style="color: pink">￥{{ goods.attr2 }}</div>
    <div class="info">{{ goods.attr3 }}</div>
  </div>
</template>

<script>
export default {
  name: "detailsInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.details-info {
  margin: 20px 0px;
  font-size: 20px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

.info {
  padding: 10px 5px;
}
</style>