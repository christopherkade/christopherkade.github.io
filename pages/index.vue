<template>
  <section class="index-wrapper">
    <Nav />
  </section>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  components: {
    Nav
  },
  created() {
    // On Index nav, close the banner
    this.$store.commit('navAnimationStop')
  }
}
</script>

<style lang="scss">
</style>
