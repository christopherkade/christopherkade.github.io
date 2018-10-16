<template>
  <section class="article">
    <nuxt-link
      :to="url"
      class="articleTitle subtitle">{{ title }}</nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    url: {
      type: String
    }
  }
}
</script>

<style>
.article {
  padding-top: 10px;
}

.articleTitle {
  color: black;
}

.articleTitle:hover {
  opacity: 0.5;
}

@media only screen and (max-width: 468px) {
  .articleTitle {
    font-size: 1em;
  }
}
</style>
