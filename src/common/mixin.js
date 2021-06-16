//混入，把相同的代码抽取到这
import { debounce } from "./utils";
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,/* 相同的变量混入在一起*/
      refresh: null
    }
  },
  mounted() {
    /* debounce防抖 ，这里做了一层封装的在utils.js文件里*/
    this.refresh = debounce(this.$refs.scroll.refresh, 100);

    this.itemImgListener = () => {
      this.refresh(); /* 上面的变量 */
    };
    this.$bus.$on("itemimgLoad", this.itemImgListener);
    /* 监听图片加载完 */
    // this.$refs.scroll && this.$refs.scroll.refresh(); /* 重新计算滚动区域 */
    /* $el获取组件元素 */
    //this.tabOffsetTop = this.$refs.TabbarNav2.$el.offsetTop;
  },
}
//调用的话
//引入itemListenerMixin
//mixins:[itemListenerMixin]
// mounted:{}


//本来是这样的
//混入，把相同的代码抽取到这
// import { debounce } from "./utils";
// export const itemListenerMixin = {
//   data() {
//     return {
//       itemImgListener: null,/* 相同的变量混入在一起*/

//     }
//   },
//   mounted() {
//     /* debounce防抖 ，这里做了一层封装的在utils.js文件里*/
//     const refresh = debounce(this.$refs.scroll.refresh, 100);

//     this.itemImgListener = () => {
//       refresh(); /* 上面的变量 */
//     };
//     this.$bus.$on("itemimgLoad", this.itemImgListener);
//     /* 监听图片加载完 */
//     // this.$refs.scroll && this.$refs.scroll.refresh(); /* 重新计算滚动区域 */
//     /* $el获取组件元素 */
//     //this.tabOffsetTop = this.$refs.TabbarNav2.$el.offsetTop;
//   },
// }