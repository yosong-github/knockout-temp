import ko from 'knockout'

const Home = node => {

  node.innerHTML = require('!!raw-loader!./index.html').default.replace('<!DOCTYPE html>', '')

  const data = {
    home: ko.observable('home'),
    changeHome: () => {
      Promise.resolve().then(() => {
        data.home('changed home' + new Date().getTime())
      })
    }
  }

  ko.applyBindings(
    data,
    document.querySelector('#home')
  )


}

export default Home
