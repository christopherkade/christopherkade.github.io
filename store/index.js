import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      isDark: false
    }),
    mutations: {
      switchTheme(state) {
        state.isDark = !state.isDark
      }
    }
  })
}

export default createStore
