import ko from 'knockout'

const temp = `
    <div id="home">
      <h1>Home</h1>
      <strong>ID:</strong>
      <span data-bind="text:product.id"></span><br/>
      <strong>Name:</strong>
      <span data-bind="text:product.name"></span><br/>
      <strong>Price:</strong>
      <span data-bind="text:product.price"></span><br/>
      <strong>Stock:</strong>
      <span data-bind="text:product.stock"></span>
    </div>
  `

export default function Home() {
  Promise.resolve(1)

  ko.components.register('home', {
    template: temp
  })

  // 视图模型
  const vm = {
    product: {
      id: 1,
      name: ko.observable('yosong'),
      price: 10,
      stock: 20
    }
  }

  setTimeout(() => {
    vm.product.name('yosong2')
  }, 2000)

  // 激活 Knockout
  ko.applyBindings(vm, document.getElementById('home'))
}
