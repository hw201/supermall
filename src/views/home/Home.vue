<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper
    ><!--:banners="banners"把动态数据传进HomeSwiper组件  -->
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childhome/HomeSwiper";
import { gethomedata } from "../../network/home";
import RecommendView from "./childhome/RecommendView.vue";

export default {
  name: "Home",

  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      banners: [] /* 这个是轮播图的数据跟点击图片的数据 */,
      recommends: [] /* 这个是第二栏圆圈那里的数据 */,
    };
  },
  created() {
    gethomedata().then((res) => {
      //res返回的s数据结果this.result=res
      //res.data.banner.list;这些从后台一步一步提取出来的数据
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  background: pink;
  color: white;
}
</style>