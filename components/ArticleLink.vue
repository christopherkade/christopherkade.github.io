<template>
  <section class="article">
    <h5>
      <nuxt-link
        :class="{ 'darkTheme': this.$store.state.isDark }"
        :to="url"
        class="article-title"
      >{{ title }}</nuxt-link>
    </h5>
    <div class="article-subtitle">
      <time class="article-date">{{ date }}</time>
      <span> ⌛️ {{ readTime }} min read</span>
    </div>
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
  },
  computed: {
    /**
     * Calculate average reading time based on the number of words in the article
     * Reading time = words / average words per minute
     */
    readTime() {
      const article = require(`~/static/articles/${this.url}.md`)
      const words = article.split(' ').length
      const wordsPerMinute = 200
      const minutes = words / wordsPerMinute
      return Math.ceil(minutes)
    }
  }
}
</script>

<style lang="scss">
.article {
  padding: 25px;
}

.article > h5 {
  margin-bottom: 4px;
}

.article-title {
  text-decoration: none;
  font-size: 1.75em;
  color: #111111;
  font-weight: 500;
}

.article-title:hover {
  opacity: 0.7;
}

.article-subtitle {
  color: $highlight-light;
  font-weight: lighter;
}

.article-subtitle > time {
  font-size: 1em;
}

.article-subtitle > span {
  font-size: 0.8em;
}

.darkTheme {
  color: $text-dark;
}
</style>
