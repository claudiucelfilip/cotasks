import Vue from 'vue'

export default Vue.directive('popin', {
  bind (el, binding, vnode) {
    let delay = binding.value || 0
    el.classList.add('popin', 'popin-closed')
    setTimeout(() => {
      el.classList.remove('popin-closed')
    }, delay)
  }
})

