<template>
  <div id="detail">
    <detailnavbar
      class="detailnav"
      @titleClick="titleClick"
      ref="detailsnavbar"
    />
    <scroll
      class="content"
      :pull-up-load="true"
      @pullingUp="loadMore"
      ref="scroll"
      @scroll="contentscroll"
    >
      <detailswiper :top-images="topImages" class="detilswiper" />

      <details-info :goods="goods" />
      <detailstore :store-name="storeName" class="detailstore" ref="store" />
      <detailswatch :attr4="attr4" ref="attr4" />
      <detailcomment :comment="comment" ref="comment" />
      <detailstuijian :attr4="tuijian" />
    </scroll>

    <detailbottomnav @btnclick="addcart" />
    <back-top @click.native="backclick" v-show="!isShow" />
  </div>
</template>

<script>
import detailnavbar from "./childdetail/detailnavbar.vue";
import detailswiper from "./childdetail/detailswiper.vue";
import detailstore from "./childdetail/detailstore.vue";
import DetailsInfo from "./childdetail/detailsInfo.vue";

import { getdetail, Goods } from "@/network/detail";
import { debounce } from "@/common/utils";
import { itemListenerMixin } from "@/common/mixin";
import { mapActions } from "vuex";

import Scroll from "../../components/common/scroll/Scroll.vue";
import Detailswatch from "./childdetail/detailswatch.vue";
import Detailcomment from "./childdetail/detailcomment.vue";
import GoodsList from "../../components/content/goodsItem/goodsList.vue";
import Detailbottomnav from "./childdetail/detailbottomnav.vue";
import BackTop from "../../components/content/backtop/BackTop.vue";
import Detailstuijian from "./childdetail/detailstuijian.vue";

export default {
  components: {
    detailnavbar,
    detailswiper,
    detailstore,
    DetailsInfo,
    Scroll,
    Detailswatch,
    Detailcomment,
    GoodsList,
    Detailbottomnav,
    BackTop,
    Detailstuijian,
  },
  name: "Detail",
  mixins: [itemListenerMixin],
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      storeName: "",
      attr4: [],
      comment: [],
      tuijian: [],
      themTopY: [] /* 保存主题Y轴 */,
      getthemTopY: [] /* 防止回调多次 */,
      // itemImgListener: null,
      currentindex: 0 /* 防止加载多次，记录它 */,
      isShow: false,
    };
  },

  created() {
    //保存传入的id
    this.id = this.$route.params.id;

    //根据id请求详情数据
    getdetail(this.id).then((res) => {
      // console.log(res);
      // 获取轮播图
      this.topImages = res.details.split(","); /* 后端找到对应的数据 */

      /* 把数据整合到一起，就面向一个对象就可以了，不用定义多个变量 这里调用的是detail.js的goods 这里不起作用*/
      this.goods = new Goods(
        res.attr1.toString(""),
        res.attr2.toString(""),
        res.attr3.toString("")
      );

      // 获取商家店铺名字
      this.storeName = res.storeName.toString("");
      // 获取参数图片
      this.attr4 = res.attr4.split(",");
      // 获取评论
      this.comment = res.comment.split(",");
      // 获取推荐
      this.tuijian = res.attr4.split(",");

      //给getthemTopY赋值（对给 this.themTopY赋值操作进行防抖)
      this.getthemTopY = debounce(() => {
        this.themTopY = [];
        this.themTopY.push(0);
        this.themTopY.push(this.$refs.store.$el.offsetTop);
        this.themTopY.push(this.$refs.attr4.$el.offsetTop);
        this.themTopY.push(this.$refs.comment.$el.offsetTop);
        this.themTopY.push(Number.MAX_VALUE); /* 最大值 */
        console.log(this.themTopY);
      }, 100);
    });
  },
  methods: {
    ...mapActions(["cartTo"]),
    addcart() {
      //  获取购物车要展示的相关信息，比如价钱，图片，描述，id
      // 在对应的数据找到对应的相关信息比如this.attr4.title
      const product = {};
      product.id = this.id;
      product.img = this.topImages[0];
      product.attr1 = this.goods.attr1;
      product.attr2 = this.goods.attr2;

      // 将商品添加到购物车里面
      // 这里通过mutations添加
      // mutations用commit
      // this.$store.commit("cartTo", product);
      // actions用dispatch
      // 返回ations里面的结果
      this.cartTo(product).then((res) => {
        // console.log(res);
        // $toast拿到的就是那个组件的methods这个对象
        this.$toast.show(res, 2000);
        // console.log(this.$toast);
      });
      // 不用...mapActions(['cartTo']),方法的话，就这样写
      // this.$store.dispatch("cartTo", product).then((res) => {
      //   console.log(res);
      // });
    },

    /* 点击谁就给谁上拉加载更多 */
    loadMore() {
      this.scroll && this.$refs.scroll.finishPullUp();
      this.$refs.scroll.refresh(); /* 调用方法，进行更新，重新计算高度  */
    },

    //这里是用防抖
    imgLoad() {
      console.log("加载多少次");
      this.refresh();
      this.getthemTopY();
    },
    /* 点击标题跳转对应的详情 */
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themTopY[index], 200);
    },
    backclick() {
      /* 从this.$refs.scroll这个组件拿到Scroll这个组件的scroll：null scroll属性的scrollTo(0, 0)这个方法 */
      //this.$refs.scroll.scroll.scrollTo(0, 0); /* x=0，y=0 也可以这样传，返回顶部*/
      this.$refs.scroll.scrollTo(0, 0);
      /*scrollTo把内容滚动到指定位置，另外一个方法注释的那里x=0，y=0 */
    },

    //滚动详情跳转对应的标题
    contentscroll(position) {
      //方法一
      //获取Y值
      //const positionY = -position.y;
      //positionY和主题值进行对比
      // 假如主题值结果[0,7938,9120,9452]
      // positionY 在0和7938之间，index=0
      // positionY 在7938和9120之间，index=1
      // positionY 在9120和9452之间，index=2

      // positionY 大于等于9452值，index=3
      // let length = this.themTopY.length;
      // for (let i = 0; i < length; i++) {
      //   if (
      //     (this.currentindex !== i &&
      //       i < length - 1 &&
      //       positionY >= this.themTopY[i] &&
      //       positionY < this.themTopY[i + 1]) ||
      //     (i === length - 1 && positionY >= this.themTopY[i])
      //   ) {
      //     this.currentindex = i;
      //     // console.log(this.currentindex);
      //     this.$refs.detailsnavbar.currentindex = this.currentindex;
      //   }
      // }
      //方法二
      // 假如主题值结果[0,7938,9120,9452,MAV_VAULE]
      const positionY = -position.y;
      let length = this.themTopY.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentindex !== i &&
          positionY >= this.themTopY[i] &&
          positionY < this.themTopY[i + 1]
        ) {
          this.currentindex = i;
          this.$refs.detailsnavbar.currentindex = this.currentindex;
        }
      }
      this.isShow = -position.y > 100; /* 返回顶部 */
    },

    //如果不用防抖
    // imgLoad(){
    //   this.$refs.scroll.refresh()
    // }
  },

  mounted() {
    // /* debounce防抖 ，这里做了一层封装的在utils.js文件里*/
    // const refresh = debounce(this.$refs.scroll.refresh, 100);
    // this.itemImgListener = () => {
    //   refresh(); /* 上面的变量 */
    // };
    // this.$bus.$on("itemimgLoad", this.itemImgListener);
    // /* 监听图片加载完 */
    // // this.$refs.scroll && this.$refs.scroll.refresh(); /* 重新计算滚动区域 */
    // /* $el获取组件元素 */
    // //this.tabOffsetTop = this.$refs.TabbarNav2.$el.offsetTop;
  },
  destoryed() {
    /* 因为这里之前没做缓存，所以用destoryed，不能用deactivated */
    this.$bus.$off("itemimgLoad", this.itemImgListener);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: white;

  /* height: 100vh; */
}
.detailnav {
  position: relative;
  z-index: 9;
  background: white;
}
.content {
  height: calc(100vh - 44px - 49px);
}
.detilswiper {
  height: 300px;
}
</style>
