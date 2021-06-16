
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
import toast from '@/components/common/toast/index.js'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// 弹窗
Vue.use(toast)

/* 解决移动端延迟300ms */
FastClick.attach(document.body)

// 图片懒加载,:src=其他地方则改为v-lazy
Vue.use(VueLazyLoad, {
  // 为懒加载添加背景图
  loading: require('@/assets/img/01.png')
})

Vue.config.productionTip = false

// 时间总线
Vue.prototype.$bus = new Vue()


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
