/* 防抖，一些函数调用得非常频繁，就使用防抖 */
export function debounce(func, delay) {
  /* 两个参数 一个方法 一个时间 */
  let timer = null;
  return function (...args) {
    //...不止传一个参数，可以更多个
    if (timer) clearTimeout(timer); //如果是上一个的时间则清除延时器，等数据加载完了再延迟加载所有
    timer = setTimeout(() => {
      func.apply(this, args); /* apply改变this的指向 不然指向的是window */
    }, delay);
  };
}

//防抖的调用方法
// const refresh = debounce(
//   this.$refs.scroll.refresh,
//   50
// ); /* debounce防抖 ，这里做了一层封装的*/
// this.$bus.$on("itemimgLoad", () => {
//   refresh(); 
// });


//时间戳
export function dateFormat(thisDate, fmt) {
  //获取年份
  //y+ 一个或者多个
  //y* 零个或者多个
  //y? 零个或者1个

  // yyyy 2019
  // yy 19
  // y9
  // yyy 019
  if (/(y+)/.test(fmt)) {
    // fmt = fmt.replace（替换）(RegExp.$1（别人传的结果，假如yyyy就显示2019）, (thisDate.getFullYear()(这里就替换传进来的年份几位) + "").substr(4 - RegExp.$1.length))（如果yyyy这里就4-4=0，前面就显示2019）;
    fmt = fmt.replace(RegExp.$1, (thisDate.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  let o = {
    "M+": thisDate.getMonth() + 1,
    "d+": thisDate.getDate(),
    "h+": thisDate.getHours(),/* h24小时制，H12小时制 */
    "m+": thisDate.getMinutes(),
    "s+": thisDate.getSeconds(),
    "q+": Math.floor((thisDate.getMonth() + 3) / 3),
    "S": thisDate.getMilliseconds()
  };

  for (var k in o) {
    if (new RegExp("(${k})").test(fmt)) {
      /* 这里传几位就截取几位 一般就04:04这样显示，用0补齐 */
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
};
// var Date = new Date();
// console.log(dateFormat(Date, "yyyy-MM-dd hh:mm:ss"))//调用