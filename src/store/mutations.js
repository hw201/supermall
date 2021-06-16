// 这个文件可以通过props引入到vue中，比如product.count、product.checked
// 模型发生改变，然后界面跟着发生改变，这里是模型
import {
  Add_COUNTER,
  Add_TO_CART
} from './mutations.type'
export default {
  // dispatch做了两个分包任务，方便跟踪
  // payload新添加的商品
  [Add_COUNTER](state, payload) {
    payload.count++
  },
  [Add_TO_CART](state, payload) {

    // 商品放入购物车默认选中
    payload.checked = true
    // 把payload(新添加的商品)添加到cartList数组去
    state.cartList.push(payload)
  }

}