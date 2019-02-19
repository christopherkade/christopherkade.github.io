<template>
  <div class="index-wrapper">
    <div v-for="article in articles" :key="article.title" class="articles">
      <ArticleLink :title="article.title" :url="article.path" :date="article.date" class="article"/>
    </div>
  </div>
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
  padding: 25px 350px 100px 350px;
}

@media only screen and (max-width: 1280px) {
  .index-wrapper {
    padding-left: 150px;
    padding-right: 150px;
  }
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 720px) {
  .index-wrapper {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
