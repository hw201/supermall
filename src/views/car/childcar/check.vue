<template>
  <div class="checkitem" :class="{ active: 'isChecked' }">
    <img src="@/assets/img/common/cheak.png" />
  </div>
</template>

<script>
export default {
  name: "check",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.checkitem {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #aaa;
}
.checkitem img {
  width: 30px;
  height: 30px;
  border-radius: 50%;

  position: relative;
  top: -2px;
  left: -2px;
}
.active {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border-color: red;
  background-color: red;
}
</style>