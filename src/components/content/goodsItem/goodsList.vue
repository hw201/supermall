<template>
  <div id="goods-list">
    <goods-list-item
      v-for="(item, index) in goods"
      :goods-item="item"
      :key="index"
    >
      <!--:goods-item="item"这样就把item传入GoodsListItem的goods-item里了 -->
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./goodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#goods-list {
  display: flex;
  flex-wrap: wrap; /* 包裹，根据宽度一行显示多少个，要给goods-item设置宽度 */
  justify-content: space-around; /* 均等分，根据img宽度 */
}
</style>