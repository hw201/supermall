import { request, request1 } from "./request";


export function gethomedata() {
  return request({
    url: '/home/multidata'/* 请求接口 */
  })
}

export function gethomegoods(type, pageIndex, pageSize) {/* 传参数 */
  return request1({
    url: '/getImages',/* 请求接口 */
    params: {
      /* 写在地址栏上面的参数 */
      type,
      pageIndex,
      pageSize
    }
  })
}

