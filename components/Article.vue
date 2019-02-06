<template>
  <section class="article">
    <h5>
      <nuxt-link
        :class="{ 'darkTheme': this.$store.state.isDark }"
        :to="url"
        class="article-title"
      >{{ title }}</nuxt-link>
    </h5>
    <time class="article-date">{{ date }}</time>
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
    },
    date: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.article {
  padding: 25px;
}

.article-title {
  text-decoration: none;
  font-size: 1.75em;
  color: #111111;
  font-weight: bold;
}

.article-title:hover {
  opacity: 0.7;
}

.article-date {
  color: $highlight-light;
  font-weight: bold;
  font-size: 1.25em;
}

.darkTheme {
  color: $text-dark;
}
</style>
