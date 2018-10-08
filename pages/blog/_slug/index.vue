<template>
  <div :key="$route.params.slug">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{$route.params.slug}}
          </h1>
        </div>
      </div>
    </section>
    <div class="container">
      <div v-html="file" class="contentWrapper content"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    file() {
      const fileContent = require(`~/static/articles/${
        this.$route.params.slug
      }.md`)
      return fileContent
    }
  }
}
</script>

<style>
</style>