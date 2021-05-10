<template>
  <tab-bar>
    <tab-bar-item path="/home"
      ><!-- activeColor不写就默认的颜色 -->
      <img slot="item-icon" src="@/assets/img/03.png" alt=" " />
      <img slot="item-icon-active" src="@/assets/img/04.png" alt=" " />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/classify">
      <img slot="item-icon" src="@/assets/img/01.png" alt=" " />
      <img slot="item-icon-active" src="@/assets/img/02.png" alt=" " />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/car">
      <img slot="item-icon" src="@/assets/img/07.png" alt=" " />
      <img slot="item-icon-active" src="@/assets/img/08.png" alt=" " />
      <div slot="item-text">购物</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="@/assets/img/05.png" alt=" " />
      <img slot="item-icon-active" src="@/assets/img/06.png" alt=" " />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>