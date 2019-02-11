import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      isDark: false
    }),
    mutations: {
      /**
       * Called when the theme switcher is clicked or when the page is reloaded
       * If a theme setting is set, load it, otherwise ignore it
       * @param {*} state
       * @param {*} darkTheme
       */
      switchTheme(state) {
        state.isDark = !state.isDark
      }
    }
  })
}

export default createStore
