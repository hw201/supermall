<template>
  <!-- 用better-scroll要包裹着一个标签 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      /* 获取当前dom的wrapper */
      click: true /* 这样才可以点击里面的事件 */,
      /* 0 1 2 3 不能写死，不是每个页面都用，用在调用一下 */
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad /* true/false 哪个页面用就调用 */,
    });
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }

    if (this.pullUpLoad) {
      /* 当为ture才监听 */
      this.scroll.on("pullingUp", () => {
        // console.log("----");
        /* 首页做这个事件，所以发射出去 */
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      /* scroll默认只加载一次 */
      this.scroll || this.scroll.finishPullUp();
    },
    refresh() {
      //console.log("---");
      this.scroll && this.scroll.refresh();
    },

    getsaveY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style>
</style>