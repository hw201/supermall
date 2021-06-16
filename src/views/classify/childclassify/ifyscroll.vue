<template>
  <div class="bigdiv">
    <div
      v-for="(item, index) in list"
      :key="index"
      :class="{ active: index === currindex }"
      @click="btnclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ifyscroll",
  data() {
    return {
      currindex: 0,
      list: [
        "正在流行",
        "上衣",
        "裤子",
        "裙子",
        "内衣",
        "女鞋",
        "男鞋",
        "包包",
        "运动",
        "配饰",
        "美妆",
        "家居",
        "零食",
      ],
    };
  },

  methods: {
    btnclick(index) {
      // console.log("---");
      this.currindex = index;
    },
  },
};
</script>

<style scoped>
.bigdiv {
  width: 100px;
  height: 100%;
  font-size: 17px;
  background-color: rgba(238, 226, 226, 0.2);
}
.bigdiv div {
  padding: 20px 0px;
  text-align: center;
}
.active {
  color: pink;
  background-color: white;
}
</style>