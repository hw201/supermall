<template>
  <div class="tabbarnav">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tabbarnav-item"
      :class="{ active: index === currindex }"
      @click="btnclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarNav",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currindex: 0,
    };
  },
  methods: {
    btnclick(index) {
      this.currindex = index;
      this.$emit("goodsclick", index); /* 向外面传出去点击事件 */
    },
  },
};
</script>

<style scoped>
.tabbarnav {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  margin-top: -1px;
  font-size: 14px;
}
.tabbarnav-item {
  flex: 1;
}
.active {
  color: pink;
}
.active span {
  border-bottom: 3px solid pink;
  padding: 5px;
}
</style>