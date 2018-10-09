import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      navAnimation: false
    }),
    mutations: {
      navAnimationStart(state) {
        state.navAnimation = true
      },
      navAnimationStop(state) {
        state.navAnimation = false
      }
    }
  })
}

export default createStore
