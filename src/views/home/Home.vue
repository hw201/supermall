<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tabbar-nav
      :titles="['流行', '新款', '精选']"
      @goodsclick="goodsclick"
      ref="TabbarNav1"
      class="tabbar-nav"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="topclick"
      :pull-up-load="true"
      @pulling-up="loadMore"
      ><!--Scroll发出的事件@scroll  -->
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      /><!--:banners="banners"把动态数据传进HomeSwiper组件  -->
      <recommend-view :recommends="recommends" />
      <faceture />
      <tabbar-nav
        :titles="['流行', '新款', '精选']"
        @goodsclick="goodsclick"
        ref="TabbarNav2"
      /><!--@goodsclick子组件发出的事件  -->
      <goods-list :goods="showgoods" />
      <!-- <goods-list :goods="goods[defaultindex].list" /> -->
    </scroll>
    <!-- 组件点击事件加.native -->
    <back-top @click.native="backclick" v-show="isShow" /><!-- 回到顶部 -->
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "./childhome/HomeSwiper";
import RecommendView from "./childhome/RecommendView.vue";
import Faceture from "./childhome/Faceture.vue";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backtop/BackTop";

import { gethomedata, gethomegoods } from "@/network/home";
import { debounce } from "@/common/utils";

import TabbarNav from "@/components/content/TabbarNav/TabbarNav.vue";
import goodsList from "@/components/content/goodsItem/goodsList.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Faceture,
    TabbarNav,
    goodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [] /* 这个是轮播图的数据跟点击图片的数据 */,
      recommends: [] /* 这个是第二栏圆圈那里的数据 */,
      goods: {
        //保存数据
        1: { pageIndex: 0, list: [] } /* pop */,
        2: { pageIndex: 0, list: [] } /* new */,
        3: { pageIndex: 0, list: [] } /* sell */,
      },

      defaultindex: "1" /* 默认显示数据goods的1 */,
      isShow: false,
      tabOffsetTop: 0 /* 633 */,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showgoods() {
      return this.goods[this.defaultindex].list;
    },
  },
  activated() {
    //活动状态，使用了keeplive这个标签采用这两个函数
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh(); //重新刷新一次
  },
  deactivated() {
    //没活动状态
    this.saveY = this.$refs.scroll.getsaveY();
    //this.$refs.scroll.refresh();
  },

  created() {
    //请求多个数据
    this.gethomedata();
    //请求商品数据
    this.gethomegoods("1");
    this.gethomegoods("2");
    this.gethomegoods("3");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("itemimgLoad", () => {
      refresh(); /* 上面的变量 */

      /* 监听图片加载完 */
      // this.$refs.scroll && this.$refs.scroll.refresh(); /* 重新计算滚动区域 */
    });

    /* $el获取组件元素 */
    //this.tabOffsetTop = this.$refs.TabbarNav2.$el.offsetTop;
  },
  methods: {
    /* 点击按钮相关事件 */
    goodsclick(index) {
      switch (index) {
        case 0:
          this.defaultindex = "1";
          break;
        case 1:
          this.defaultindex = "2";
          break;
        case 2:
          this.defaultindex = "3";
          break;
      }
      /* 点击哪个都保持一致 */
      this.$refs.TabbarNav1.currindex = index;
      this.$refs.TabbarNav2.currindex = index;
    },
    backclick() {
      /* 从this.$refs.scroll这个组件拿到Scroll这个组件的scroll：null scroll属性的scrollTo(0, 0)这个方法 */
      //this.$refs.scroll.scroll.scrollTo(0, 0); /* x=0，y=0 也可以这样传，返回顶部*/
      this.$refs.scroll.scrollTo(0, 0);
      /*scrollTo把内容滚动到指定位置，另外一个方法注释的那里x=0，y=0 */
    },
    topclick(position) {
      //console.log(position);/* 打印的时候是负值 */
      this.isShow = -position.y > 1000; /* 大于600就为true显示 */
      //console.log(-position.y);
      this.isTabFixed = -position.y > this.tabOffsetTop; //大于就吸顶
    },
    loadMore() {
      this.gethomegoods(this.defaultindex);
    },
    swiperImgLoad() {
      //console.log(this.$refs.TabbarNav2.$el.offsetTop);
      //this.tabOffsetTop = this.$refs.TabbarNav1.$el.offsetTop;
      this.tabOffsetTop = this.$refs.TabbarNav2.$el.offsetTop;
    },

    /* 网络请求相关数据 */
    gethomedata() {
      gethomedata().then((res) => {
        /* 这个是网络请求的gethomedata */
        //res返回的数据结果this.result=res
        //res.data.banner.list;这些从后台一步一步提取出来的数据
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    gethomegoods(type) {
      const page = this.goods[type].pageIndex + 1; //获取页码
      // 在此处执行你要执行的函数
      gethomegoods(type, page, 6).then((res) => {
        //console.log(res);
        this.goods[type].list.push(...res); //把结果添加到goods[type]里面去（...意思不止传一个）
        this.goods[type].pageIndex += 1; /* 页数也跟着加 */
        console.log(this);

        //完成加载更多
        this.$refs.scroll || this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
/* 作用域，相同class不会被更改 */
#home {
  /* padding-top: 44px; */
  /* margin-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background: pink;
  color: white;

  /*在使用浏览器原生滚动时，为了让导航不跟随一起滚动  */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; 重叠 */
}
.tabbar-nav {
  position: relative; /* 相对定位，保持在原来的位置 */
  z-index: 9;
  background: white;
}
/* .tabbarnav {
  // 固定位置停留，往上的时候就滑动滑动
  top: 42px;
  position: sticky;
  background: white;
  z-index: 9; // 如果导航栏被挡住了可以用这个设置固定 
} */
.content {
  /*height: calc(100vh - 93px);  //滚动屏幕的高度减去标题栏44px 底部栏49px  */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>