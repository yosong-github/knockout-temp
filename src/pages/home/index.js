import ko from 'knockout'

const Home = node => {
  console.log('home init')

  node.innerHTML = require('!!raw-loader!./index.html').default.replace('<!DOCTYPE html>', '')

  ko.applyBindings(
    {
      home: ko.observable('home')
    },
    document.querySelector('#home')
  )
}

export default Home
