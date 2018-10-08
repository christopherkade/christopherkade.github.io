<template>
  <section class="blog-wrapper">
    <section class="container">
      BLOG
      <section class="article">
        <nuxt-link to="/blog/article1">Post 01</nuxt-link>
      </section>
      <section class="article">
        <nuxt-link to="/blog/article2">Post 02</nuxt-link>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Blog'
}
</script>

<style lang="scss" scoped>
</style>
