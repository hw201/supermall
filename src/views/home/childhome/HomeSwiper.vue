<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link"
        ><!-- 获取后台对应的link -->
        <img :src="item.image" @load="imgMoreLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  name: "HomeSwiper",
  /* 获取数据 数据在首页Home里 */
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imgMoreLoad() {
      if (!this.isLoad) {
        /* 只发送一次事件 */
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style>
</style>