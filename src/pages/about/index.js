import ko from 'knockout'

const About = node => {
  console.log('about init')

  node.innerHTML = require('!!raw-loader!./index.html').default.replace('<!DOCTYPE html>', '')

  ko.applyBindings(
    {
      about: ko.observable('about')
    },
    document.querySelector('#about')
  )
}

export default About
