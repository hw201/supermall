<template>
  <div id="detail">
    <nav-bar>
      <div slot="left" class="imgtitles" @click="backbtn">
        <img src="@/assets/img/common/detail.png" alt="" />
      </div>
      <div slot="center" class="titles">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="titles-item"
          :class="{ active: index === currindex }"
          @click="titlesclick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currindex: 0,
    };
  },
  methods: {
    titlesclick(index) {
      this.currindex = index;
    },
    backbtn() {
      //history.back();
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.titles {
  display: flex;
}
.titles-item {
  flex: 1;
}
img {
  width: 20px;
  height: 20px;
  margin-top: 13px;
}
.active {
  color: pink;
}
</style>>
</style>