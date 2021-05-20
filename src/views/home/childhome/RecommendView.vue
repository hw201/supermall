<template>
  <div class="recommend">
    <div
      class="recommend-view"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" />
        <div class="title">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;

  width: 100%;
  padding: 10px 0px 20px;
  border-bottom: 10px solid #eee;
}
.recommend-view {
  flex: 1;
}

.recommend-view img {
  width: 100%;

  padding: 15px;
}
.title {
  text-align: center;
}
</style>