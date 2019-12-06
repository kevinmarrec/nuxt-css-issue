import ('./MySpecialComponent.css')

export default {
  render (h) {
    return h('div', {
      class: 'special-component-class'
    }, 'Some special text')
  }
}
