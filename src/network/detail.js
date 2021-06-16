import { request1 } from "./request";


export function getdetail(id) {
  return request1({
    url: '/getImageById',
    params: {
      id
    }
  })
}

export class Goods {
  /* 后端返回对应的title（res1, res2, res3）从中抽取想要的数据，Detail进行调用 */
  constructor(attr1, attr2, attr3) {
    this.attr1 = attr1/* 比如attr1.title */
    this.attr1 = attr1/* attr1.img */
    this.attr2 = attr2
    this.attr3 = attr3
  }
}


