
import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  // 1.创建组件构造器，把组件Toast对象传进来
  const toastContrustor = Vue.extend(Toast)

  // 2.new的方式，根据组件构造器可以创建出来一个组件对象
  const toast = new toastContrustor()

  // 3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  // 4.toast.$el对应的就是div，把这个东西添加到body里
  document.body.appendChild(toast.$el)

  // toast这个对象最好是组件Toast这个对象，然后在对应的组件封装一个methods
  Vue.prototype.$toast = toast;
}

export default obj