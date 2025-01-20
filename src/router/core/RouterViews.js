import ko from 'knockout'

const Router = (node = document.querySelector('#main')) => {
  node.innerHTML = require('!!raw-loader!./router.html').default.replace('<!DOCTYPE html>', '')

  ko.applyBindings(
    {
      name: ko.observable('yosong')
    },
    document.querySelector('#router')
  )
}

export default Router
