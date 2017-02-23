// import Vue from 'vue'
import store from '../../src/store'
import DiePanel from '../../src/components/DiePanel.vue'

describe('DiePanel.vue', () => {
  it('should render correct contents', () => {
    var mount = document.createElement('div');
    const vm = new DiePanel({
      el: mount,
      propsData: {
        diceInHand: new store.Dice()
      }
    })
    expect(vm.$el.querySelector('.roll-button button').textContent).toBe('1')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
