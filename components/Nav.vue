<template>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <nuxt-link to="/about">
        <a class="button">
          <span class="icon">
            <i class="fas fa-user-alt"></i>
          </span>
          <span>About</span>
        </a>
      </nuxt-link>
    </div>
    <div class="column is-narrow">
      <nuxt-link to="/blog">
        <a class="button">
          <span class="icon">
            <i class="fas fa-pencil-alt"></i>
          </span>
          <span>Blog</span>
        </a>
      </nuxt-link>
    </div>
    <div class="column is-narrow">
      <nuxt-link to="/resume">
        <a class="button">
          <span class="icon">
            <i class="fas fa-file"></i>
          </span>
          <span>Resume</span>
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
  background-color: transparent;
  border: none;
  width: auto;
}

.button:hover {
  background-color: #f9f9f9;
}

.columns {
  margin-top: 35px;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .columns {
    text-align: center;
    margin-top: 0;
  }

  .button {
    width: 80%;
  }
}
</style>
