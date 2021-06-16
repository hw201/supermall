<template>
  <div class="watchimg">
    <div v-for="(item, index) in attr4" :key="index">
      <img :src="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailswatch",
  props: {
    attr4: {
      type: Array,
      default() {
        return [];
      },
    },
    /*   methods: {
      imgLoad() {
        this.$emit("imgLoad");
      },
    }, */
  },
};
</script>

<style scoped>
.watchimg {
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  position: relative;
  top: 100px;
}
img {
  height: 100%;
  width: 100%;
}
</style>