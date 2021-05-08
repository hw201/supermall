<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue"
      ><!-- activeColor不写就默认的颜色 -->
      <img slot="item-icon" src="~assets/img/tabbar/03.png" alt=" " />
      <img slot="item-icon-active" src="~assets/img/tabbar/04.png" alt=" " />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/classify" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/01.png" alt=" " />
      <img slot="item-icon-active" src="~assets/img/tabbar/02.png" alt=" " />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/car" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/07.png" alt=" " />
      <img slot="item-icon-active" src="~assets/img/tabbar/08.png" alt=" " />
      <div slot="item-text">购物</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/05.png" alt=" " />
      <img slot="item-icon-active" src="~assets/img/tabbar/06.png" alt=" " />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
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