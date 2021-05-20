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