<template>
  <div :key="$route.params.slug">
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