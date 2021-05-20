<template>
  <div class="tab-bar-item" @click="btn">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    //App的path="/home"
    path: String,

    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      //isActive: true,
    };
  },

  computed: {
    //动态决定isAcitve true/false
    isActive() {
      //this.$route.path那个路由处于活跃就哪个对象
      //判断this.$route.path.包不包含 props的this.path
      //这个home和item（home）一样就true，则其他就flase,home=》item（home）=true
      //home=》item（car）=flase
      //home=》item（classify）=flase
      //home=》item（profile）=flase
      //什么时候有这个path ！==-1的时候
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      //动态绑定activeColor，先来上面请求isActive，如果true就 { color: this.activeColor }，false就{}
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    btn() {
      //每个item和路由对应起来
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  padding-top: 5px;
}
.active {
  color: red;
}
</style>