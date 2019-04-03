<template>
  <section class="index-wrapper">
    <ul class="article-list">
      <li
        v-for="article in articles"
        :key="article.title"
        class="article">
        <ArticleLink
          :article="article"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import ArticleLink from '@/components/ArticleLink'
import articleList from '@/static/articleList.json'

export default {
  components: {
    ArticleLink
  },
  data() {
    return {
      articles: articleList
    }
  }
}
</script>

<style lang="scss">
.index-wrapper {
  padding: 25px 450px 100px 450px;
}

.article-list {
  padding: 0;
}

.article {
  list-style-type: none;
  padding: 2rem;
}

@media only screen and (max-width: 1500px) {
  .index-wrapper {
    padding-left: 300px;
    padding-right: 300px;
  }
}

@media only screen and (max-width: 1280px) {
  .index-wrapper {
    padding-left: 150px;
    padding-right: 150px;
  }
}

@media only screen and (max-width: 1060px) {
  .index-wrapper {
    padding-left: 100px;
    padding-right: 100px;
  }
}

@media only screen and (max-width: 720px) {
  .index-wrapper {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
