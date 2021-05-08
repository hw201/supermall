import Vue from 'Vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/home/Home.vue')
const Classify = () => import('../views/classify/Classify.vue')
const Car = () => import('../views/car/Car.vue')
const Profile = () => import('../views/profile/Profile.vue')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },

  {
    path: '/car',
    component: Car
  },
  {
    path: '/profile',
    component: Profile
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router