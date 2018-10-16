<template>
  <section class="blog-wrapper">
    <section class="container">
      <div class="section">
        <h1 class="title">My thoughts put into words</h1>

        <div class="articles">
          <div
            v-for="(article, index) in articles"
            :key="article.title"
            class="article">
            <Article
              :title="article.title"
              :url="article.path" />
            <Separator v-if="index != articles.length - 1" />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Separator from '@/components/Separator'
import Article from '@/components/Article'
import articleList from '@/static/articleList.json'

export default {
  name: 'Blog',
  components: {
    Separator,
    Article
  },
  data() {
    return {
      articles: articleList
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
}

.articles {
  margin-top: 50px;
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 468px) {
  .title {
    font-size: 1.25em;
  }
}
</style>
