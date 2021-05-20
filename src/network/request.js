import axios from "axios";


export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })
  //2.axios的拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  //响应式拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  //发送真正的网络请求
  return instance(config)//相当于返回promise
}

export function request1(config) {
  const instance1 = axios.create({
    baseURL: 'http://localhost',
    timeout: 5000
  })

  //2.axios的拦截器
  instance1.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  //响应式拦截
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  //发送真正的网络请求
  return instance1(config)//相当于返回promise
}

