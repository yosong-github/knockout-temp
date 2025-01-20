import About from '@/pages/about'
import Route from './core/Route'
import Home from '@/pages/home'

/**
 * 路由注册
 * @param {string} id - 挂载节点id
 */
function router() {
  new Route([
    {
      path: '',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: 'about',
      component: About,
      meta: {
        title: '关于'
      }
    }
  ])
}

export default router
