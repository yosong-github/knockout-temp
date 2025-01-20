import ko from 'knockout'
import './layout.less'

const Layout = (node = document.querySelector('body')) => {
  node.innerHTML = require('!!raw-loader!./layout.html').default.replace('<!DOCTYPE html>', '')
  console.log(111)

  ko.applyBindings(
    {
      name: ko.observable('yosong')
    },
    document.querySelector('#layout')
  )
}

export default Layout
