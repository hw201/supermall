<template>
  <div id="detail">
    <detailnavbar />
    <detailswiper :top-images="topImages" class="detilswiper" />
    <detailstore :store-name="storeName" class="detailstore" />
  </div>
</template>

<script>
import detailnavbar from "./childdetail/detailnavbar.vue";
import detailswiper from "./childdetail/detailswiper.vue";
import detailstore from "./childdetail/detailstore.vue";

import { getdetail } from "@/network/detail";
export default {
  components: {
    detailnavbar,
    detailswiper,
    detailstore,
  },
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: [],
      storeName: "",
    };
  },
  created() {
    //保存存入的id
    this.id = this.$route.params.id;

    //根据id请求详情数据
    getdetail(this.id).then((res) => {
      console.log(res);
      this.topImages = res; /* 后端找到对应的数据 */

      //this.storeName = res.storeName;

      // this.storeName = new storeName(res.storeName);
    });
  },
};
</script>

<style scoped>
.detilswiper {
  height: 300px;
}
.detailstore {
  height: 20px;
}
</style>
