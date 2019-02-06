<template>
  <div>
    <div :key="$route.params.slug" class="articleSlug">
      <div v-html="file"></div>
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

<style lang="scss">
.articleSlug {
  padding: 25px 350px 100px 350px;
}

.articleSlug > h1 {
  font-size: 2em;
}

p > a,
li > a,
h1 > a {
  text-decoration: none;
  font-weight: bold;
  color: $highlight-light;
}

p > a:hover,
li > a:hover {
  opacity: 0.75;
}

/* Article title */
section > h1 {
  font-size: 2.5em;
  font-weight: 300;
}

/* Article images */
p > img {
  margin: 16px;
}

@media only screen and (max-width: 1280px) {
  .articleSlug {
    padding-left: 100px;
    padding-right: 100px;
  }
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 720px) {
  .articleSlug {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
