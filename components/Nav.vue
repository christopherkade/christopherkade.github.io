<template>
    <div class="columns is-centered">
        <div class="column is-narrow">
            <nuxt-link to="/about">
              <a class="button" @click="navAnimation()">
                <span>About</span>
                <span class="icon">
                  <i class="fas fa-user-alt"></i>
                </span>
              </a>
            </nuxt-link>
        </div>

        <div class="column is-narrow">
          <nuxt-link to="/blog">
            <a class="button" @click="navAnimation()">
              <span>Blog</span>
              <span class="icon">
                <i class="fas fa-pencil-alt"></i>
              </span>            
            </a>
          </nuxt-link>
        </div>

        <div class="column is-narrow">
          <nuxt-link to="/resume">
            <a class="button">
              <span>Resume</span>
              <span class="icon">
                <i class="fas fa-file"></i>
              </span>
            </a>
          </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    navAnimation() {
      // Starts the closing pannel animation of the banner
      this.$store.commit('navAnimationStart')
    }
  }
}
</script>

<style scoped>
.button {
  font-size: 2em;
  background-color: #eaeeef;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .columns {
    text-align: center;
  }
}
</style>
