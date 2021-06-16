
import { request, request1 } from "./request";


export function gethomedata() {
  return request({/* request返回的是promise */
    url: '/home/multidata'/* 请求接口，包含了轮播图、还有下面的数据 */
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


