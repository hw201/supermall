<template>
  <div>
    <p>{{ storename }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "detailstore",
  props: {
    storename: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>

<style>
</style>