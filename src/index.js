// import ko from 'knockout'

import 'normalize.css'
import '@/styles/common.less'

import router from '@/router'

const layoutTemp = `
<div id="layout">


  <div id="header">header</div>
  <div id="main">
  </div>

</div>
`

document.querySelector('body').innerHTML = layoutTemp

router('#main')
