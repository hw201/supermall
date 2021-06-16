import {
  Add_COUNTER,
  Add_TO_CART
} from './mutations.type'
export default {
  // 判断逻辑的放这里比较好

  cartTo(context, payload) {

    return new Promise((resolve, reject) => {
      // 方法一
      // 新payload添加的商品
      // 遍历cartList，判断获取到的信息id是否等于新添加商品的id
      // 如果==item就赋值给oldproduct
      // let oldproduct = null;
      // for (item of state.cartList) {
      //   if (item.id === payload.id) {
      //     oldproduct = item
      //   }
      // }
      // // 判断数组里面是不是有oldproduct，有就1+1=2
      // // 没有就添加 payload.count = 1
      // if (oldproduct) {
      //   oldproduct.count += 1
      // } else {
      //   payload.count = 1
      //   state.cartList.push(payload)
      // }
      // 方法二
      // 拿到item=payload.id. item返回product
      //  let product =state.cartList.find(function(item){
      //   return item.id===payload.id
      // })
      // 查找数据中心是否有该产品
      let oldproduct = context.state.cartList.find(item => item.id === payload.id)
      if (oldproduct) {
        // Add_COUNTER=oldproduct.count += 1
        context.commit(Add_COUNTER, oldproduct);
        resolve('商品+1');
      } else {
        payload.count = 1
        /* 把payload push到cartList */
        // context.state.cartList.push(payload)
        // 把新的商品提交到context
        context.commit(Add_TO_CART, payload);
        resolve('新添加商品');
      }
    })




  }
}