<template>
  <div class="itemclass">
    <div class="cheack">
      <cheack :is-checked="product.checked" @click.native="cheackbtn" />
    </div>

    <div class="productimg">
      <img :src="product.img" />
    </div>

    <div class="attr">
      <div>{{ product.attr1 }}</div>
      <div>￥{{ product.attr2 }}</div>
      <div>×{{ product.count }}</div>
    </div>
  </div>
</template>

<script>
import Cheack from "./check.vue";
export default {
  name: "carlistitem",

  components: { Cheack },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    cheackbtn() {
      // this.product.checked是在mutations.js里，加入购物车默认的是true=一点击就应该false不选中，然后点击就取反
      this.product.checked = !this.product.checked;
    },
  },
};
</script>

<style scoped>
.cheack {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.itemclass {
  height: 120px;
}

.productimg {
  position: relative;
  top: -25px;
  left: 50px;
}
.productimg img {
  height: 20%;
  width: 20%;
}
.attr div {
  position: relative;
  top: -120px;
  left: 150px;
}
</style>