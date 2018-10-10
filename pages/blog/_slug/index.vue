<template>
  <div :key="$route.params.slug" class="articleSlug">
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
.articleSlug {
  padding: 50px;
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 468px) {
  .articleSlug {
    padding: 25px;
  }
}
</style>