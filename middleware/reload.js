export default function({ store, route }) {
  if (route.path !== '/') {
    store.commit('navAnimationStart')
  } else {
    store.commit('navAnimationStop')
  }
}
