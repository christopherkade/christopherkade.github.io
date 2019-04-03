<template>
  <div>
    <h2 class="article-title">
      <nuxt-link :to="article.path">
        {{ article.title }}
      </nuxt-link>
    </h2>
    <div class="article-subtitle">
      <time class="article-date">{{ article.date }}</time>
      <span> ⌛️ {{ readTime }} min read</span>
    </div>
    <p class="article-description">
      {{ article.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    /**
     * Calculate average reading time based on the number of words in the article
     * Reading time = words / average words per minute
     */
    readTime() {
      const article = require(`~/static/articles/${this.article.path}.md`)
      const words = article.split(' ').length
      const wordsPerMinute = 200
      const minutes = words / wordsPerMinute
      return Math.ceil(minutes)
    }
  }
}
</script>

<style lang="scss">
.article-title {
  font-size: 1.75rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
}

.article-title > a {
  text-decoration: none;
  color: $highlight-light;
}

.article-description {
  color: $text-light;
  font-size: 1.1rem;
  margin-top: 0.2rem;
}

.article-title:hover {
  opacity: 0.7;
}

.article-subtitle {
  color: $text-light;
  font-weight: 400;
}

.article-subtitle > time {
  font-size: 1em;
}

.article-subtitle > span {
  font-size: 0.8em;
}
</style>
