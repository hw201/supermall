import { request } from "./request";

export function gethomedata() {
  return request({
    url: '/home/multidata'
  })
}