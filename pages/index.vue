<template>
  <section class="index-wrapper">
    <div class="columns is-centered is-mobile">
      <div class="column is-narrow">
        <nuxt-link to="/blog">
          <a class="button" @click="navAnimation()">
            <span class="icon">
              <i class="fas fa-pencil-alt"></i>
            </span>
          </a>
        </nuxt-link>
      </div>

      <div class="column is-narrow">
        <nuxt-link to="/about">
          <a class="button" @click="navAnimation()">
            <span class="icon">
              <i class="fas fa-user-alt"></i>
            </span>
          </a>
        </nuxt-link>
      </div>

      <div class="column is-narrow">
        <nuxt-link to="/resume">
          <a class="button" @click="navAnimation()">
            <span class="icon">
              <i class="fas fa-file"></i>
            </span>
          </a>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    navAnimation() {
      // Starts the closing pannel animation of the banner
      this.$store.commit('navAnimationStart')
    }
  },
  created() {
    // On Index nav, close the banner
    this.$store.commit('navAnimationStop')
  }
}
</script>

<style lang="scss">
.index-wrapper {
  min-height: 100vh;
}

.button {
  font-size: 2em;
}
</style>
