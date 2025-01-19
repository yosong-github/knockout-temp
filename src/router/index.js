import Route from './core/Route'
import Home from '@/pages/home'

/**
 * 路由注册
 * @param {string} id - 挂载节点id
 */
function router(id = '#app') {
  new Route(
    [
      {
        path: '',
        component: Home,
        meta: {
          title: '首页'
        }
      }
    ],
    document.querySelector(id)
  )
}

export default router
