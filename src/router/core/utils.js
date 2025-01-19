export function hashChangEvent() {
  // e.oldURL  e.newURL
  // 获取改变后的hash值
  let hash = location.hash.substring(1)

  // 将hash跟本地保存的的路由中的path进行匹配，匹配到指定路由，就执行指定模块的代码
  // 如果找不到符合条件的元素，那么route值为空
  let route = this.routes.find(item => item.path === hash)
  if (route) {
    console.log(document.querySelector('router-views'))

    // route.component(hash)
  }
}
