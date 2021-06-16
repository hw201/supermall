import axios from "axios";

// 这种是回调函数的方式
export function request(config) {
  const instance = axios.create({//create本身返回的是promise
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
    return res.data/* 作为转化返回数据 */
  }, err => {
    console.log(err);
  })
  //发送真正的网络请求
  return instance(config)
  //当用(config)调它，他返回值是promise，相当于返回promise,内部会进行promise包装，原来是instance(config).then(res=>{},err=>{})，
}





export function request1(config) {
  const instance1 = axios.create({
    baseURL: 'http://localhost',
    timeout: 5000,
  })

  //2.axios的拦截器(拦截请求)
  instance1.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  //响应式拦截（拦截响应）
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  //发送真正的网络请求
  return instance1(config)//相当于返回promise
}


