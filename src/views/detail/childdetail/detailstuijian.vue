<template>
  <div class="watchimg">
    <div class="imgclass" v-for="(item, index) in attr4" :key="index">
      <img :src="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailswatch",
  props: {
    attr4: {
      type: Array,
      default() {
        return [];
      },
    },
    /*   methods: {
      imgLoad() {
        this.$emit("imgLoad");
      },
    }, */
  },
};
</script>

<style scoped>
.watchimg {
  display: flex;
  flex-wrap: wrap; /* 包裹，根据宽度一行显示多少个，要给goods-item设置宽度 */
  justify-content: space-around; /* 均等分，根据img宽度 */
}
.imgclass {
  text-align: center;
}
img {
  height: 100%;
  width: 50%;
}
</style>