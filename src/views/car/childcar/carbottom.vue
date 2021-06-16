<template>
  <div class="bottombar">
    <div class="quanxuan">
      <!-- 不能直接添加组件的点击，要加native -->
      <check :isChecked="isSelectAll" @click.native="checkbtn" />
      <span>全选</span>
    </div>

    <div class="heji">合计:￥{{ heji }}</div>

    <div class="jisuan" @click="calcclick">去计算({{ jisuan }})</div>
  </div>
</template>

<script>
import Check from "./check.vue";
import { mapGetters } from "vuex";
export default {
  name: "carbottom",
  components: { Check },
  computed: {
    ...mapGetters(["cartList"]),
    heji() {
      /* 过滤选中的 */
      return this.cartList
        .filter((item) => {
          return item.checked;
        }) /* 计算选中相加后的总和 */
        .reduce((xuanzhong, item) => {
          return xuanzhong + item.attr2 * item.count;
        }, 0)
        .toFixed(2); /* 保留2位小数 */
    },
    jisuan() {
      /* 过滤选中的个数 */
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      /* 是否全部选中 */
      /* 如果购物车是0，则不选中 */
      if (this.cartList.length === 0) return false;
      // 方法一
      /*如果找到1个不选中的，就不需要继续往下找*/
      // find查找到某个元素直接停掉，这里查找不选中的，查找到有这个东西就不选中
      // 这个东西有值isSelectAll就为false,有不选中的他就不选中
      // return !this.cartList.find((item) => !item.checked);

      // 方法二（性能不高，不建议采取，因为他要遍历完）
      // 先从数组中查找有没有被选中的,
      // 如果有没有不被选中的，数组里就有长度，
      // 如果有不被选中isSelectAll（按钮）就为false
      // return !(this.cartList.filter((item)=>!item.checked).length)

      //方法三，普通遍历
      for (let item of this.cartList) {
        if (!item.checked) {
          /* 当不选中,就返回不选中fasle */
          return false; /* return找到一个false可以让for循环停止掉 */
        }
      }
      return true; /* 到最后还是没找到没选中的就为true选中 */
    },
  },
  methods: {
    checkbtn() {
      if (this.isSelectAll) {
        /* 全部选中 */
        // 列出数组的每个元素,如果都选中了，点击全选的时候就全部不选中
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        // 如果一些没选中或者全都没选中，点击全选时就全选中
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
    calcclick() {
      if (!this.isSelectAll) {
        return this.$toast.show("请选择商品", 2000);
      }
    },
  },
};
</script>

<style scoped>
.bottombar {
  position: relative;
  display: flex;
  bottom: -680px;
  height: 40px;
  line-height: 40px;
  background-color: silver;
  width: 100%;
}
.quanxuan {
  padding-right: 10px;
  display: flex;
}
.heji {
  position: relative;
  left: 80px;
  background-color: red;
  width: 150px;
}
.jisuan {
  width: 120px;
  position: relative;
  left: 80px;
  background-color: orange;
}
</style>