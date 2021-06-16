<template>
  <div class="goods-item" @click="detailbtn">
    <img
      v-lazy="goodsItem.url"
      @load="imgLoad"
    /><!-- 后台找到相对应的数据返回 -->
    <div class="goods-info">
      <p>{{ goodsItem.name }}</p>
      <!-- <span>{{ goodsItem.价格 }}</span>
      <span>{{ goodsItem.收藏 }}</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    //共用组件，有哪个就执行哪个
    showImage() {
      return this.goodsItem.url || this.goodsItem.details;
    },
  },
  methods: {
    imgLoad() {
      /* 事件总线，把itemimgLoad直接传出home */
      this.$bus.$emit("itemimgLoad");
      // 可以使用这种方法取消主页监听
      // if(this.$route.path.indexOf('/home')){
      //    this.$bus.$emit("homeitemimgLoad");
      // }else if(this.$route.path.indexOf('/detail')){
      //   this.$bus.$emit("detailitemimgLoad");
      // }
    },
    detailbtn() {
      //console.log("点击详情页");
      this.$router.push(
        "./getImageById/" + this.goodsItem.id
      ); /* 后台取对应的id */
    },
  },
};
</script>

<style scoped>
.goods-item {
  position: relative;
  width: 50%;
  padding-bottom: 40px;
}
img {
  width: 95%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute; /* 这里绝对定位，上面就相对定位 */
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
}
.goods-info p {
  overflow: hidden; /* 溢出的隐藏 */
  text-overflow: ellipsis; /* 过长的文字...省略 */
  white-space: nowrap; /* 禁止文字自动换行 */
  margin-bottom: 3px;
}
</style>