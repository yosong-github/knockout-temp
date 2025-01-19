import ko from 'knockout'
import template from '!!raw-loader!./template.html'
// require('!!raw-loader!./template.html').default

const registerTemp = () => {
  console.log(template)

  ko.components.register('router-views', {
    template: {
      element: 'router-views-temp'
    }
  })

  ko.applyBindings()
}

export default registerTemp
