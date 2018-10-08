<template>
  <section class="index-wrapper">
    <div class="columns is-centered is-mobile">
      <div class="column is-narrow">
        <nuxt-link to="/blog">
          <a class="button">
            <span>Blog</span>
          </a>
        </nuxt-link>
      </div>

      <div class="column is-narrow">
        <nuxt-link to="/about">
          <a class="button">
            <span>About</span>
          </a>
        </nuxt-link>
      </div>

      <div class="column is-narrow">
        <nuxt-link to="/resume">
          <a class="button">
            <span>Resume</span>
          </a>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.index-wrapper {
  min-height: 100vh;
}
</style>
