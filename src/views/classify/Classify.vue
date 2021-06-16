<template>
  <div class="wrapper" ref="wrapper">
    <nav-bar class="fen">
      <div slot="center">商品分类</div>
    </nav-bar>
    <ifyscroll />
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import BScroll from "better-scroll";
import Ifyscroll from "./childclassify/ifyscroll.vue";
export default {
  components: { NavBar, Ifyscroll },
  name: "Classify",
  data() {
    return {
      scroll: null,
    };
  },
  methods: {},

  mounted() {
    //实现局部滚动 //传入标签wrapper 获取document.querySelector(".wrapper")
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3 /* 实时监听滚动当前位置 */,
      pullUpLoad: true /* 上拉加载更多 */,
      // click: true,//官网有bug
    });
    /* "scroll"传入监听事件的类型，position实时记录当前位置 */
    this.scroll.on("scroll", (position) => {
      // console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  },
};
</script>

<style scoped>
.fen {
  background: pink;

  color: white;
  font-size: 20px;
}
</style>