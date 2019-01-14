<template>
  <section class="blog-wrapper">
    <Back url="/"/>
    <section class="container">
      <div class="section">
        <h1 class="title">My thoughts put into words</h1>

        <div class="articles">
          <div v-for="(article, index) in articles" :key="article.title" class="article">
            <div
              v-if="index == 0 || (index > 0
              && articles[index - 1].year != article.year)"
              class="article-year"
            >{{ article.year }}</div>
            <Article
              :title="article.title"
              :url="article.path"
              :date="article.date"
              class="article"
            />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Back from '@/components/Back.vue'
import Separator from '@/components/Separator'
import Article from '@/components/Article'
import articleList from '@/static/articleList.json'

export default {
  name: 'Blog',
  components: {
    Back,
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
  text-align: left;
}

.articles {
  margin-top: 25px;
}

.article-year {
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 25px;
}

.article {
  padding-left: 25px;
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 468px) {
  .title {
    font-size: 1.25em;
  }

  .article {
    padding-left: 0px;
  }
}
</style>
