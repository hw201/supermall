import Vue from 'vue';
import Vuex from 'vuex'


import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  /* 数组里放很多商品对象 */
  /* 存放购物车中的长度 */
  cartList: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store