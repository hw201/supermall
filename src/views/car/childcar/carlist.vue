<template>
  <div class="carlist">
    <scroll class="content" ref="scroll">
      <carlistitem
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      />
    </scroll>
    <carbottom />
  </div>
</template>

<script>
import carlistitem from "./carlistitem";
import { mapGetters } from "vuex";
import Scroll from "../../../components/common/scroll/Scroll.vue";
import carbottom from "./carbottom.vue";
export default {
  name: "carlist",
  components: { carlistitem, Scroll, carbottom },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh(); //重新刷新一次
  },
};
</script>

<style scoped>
.carlist {
  height: 100vh;
  overflow: hidden;
}
.content {
  height: calc(
    100vh - 44px - 49px - 40px
  ); /*  //滚动屏幕的高度减去标题栏44px 底部栏49px 再减去购物合计*/
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>