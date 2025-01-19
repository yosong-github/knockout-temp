import registerTemp from './RouterViews'
import { hashChangEvent } from './utils'

/**
 * hash路由
 * @param {{path: string, component: Function, meta: object}[]} routes - 路由数组
 * @param {HTMLElement} dom - 路由挂载节点
 */
function Route(routes, dom) {
  this.dom = dom
  this.dom.innerHTML = '<router-views></router-views>'
  this.routes = routes
  this.init()
}

// 为Route添加原型方法
Route.prototype = {
  constructor: Route,
  // 初始化
  init() {
    // 注册路由模板
    registerTemp()

    // 监听window对象的hashchange事件来获取路由的变化
    window.addEventListener('hashchange', hashChangEvent.bind(this))

    // 页面刷新手动触发hashchange事件
    hashChangEvent.bind(this)()
  },
  // 路由跳转
  push({ path }) {
    if (path) {
      location.hash = '#' + path
    }
  }
}

// 根据路由的改变切换页面显示内容
// function changePage(page) {
//   let contentDom = document.querySelector('.main .content')
//   if (page === '/' || page === '/student') {
//     contentDom.innerHTML = 'student module'
//   } else if (page === '/lesson') {
//     contentDom.innerHTML = 'lesson module'
//   } else if (page === '/class') {
//     contentDom.innerHTML = 'class module'
//   }
// }

// window.onload = function () {
//   // 调用构造函数，实例化路由对象，初始化路由配置
//   let router = new Route({
//     routes: [
//       { path: '/', component: changePage },
//       { path: '/student', component: changePage },
//       { path: '/lesson', component: changePage },
//       { path: '/class', component: changePage }
//     ]
//   })

//   // 为导航注册点击事件切换路由
//   document.querySelector('.sidebar-ul').addEventListener('click', function (e) {
//     if (e.target.nodeName == 'LI') {
//       let domClassName = e.target.className
//       if (domClassName.indexOf('stuManage') > -1) {
//         router.push({ path: '/student' })
//       } else if (domClassName.indexOf('lesManage') > -1) {
//         router.push({ path: '/lesson' })
//       } else if (domClassName.indexOf('claManage') > -1) {
//         router.push({ path: '/class' })
//       }
//     }
//   })
// }

export default Route
