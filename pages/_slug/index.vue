<template>
  <div>
    <div :key="$route.params.slug" class="article-slug">
      <div v-html="file"></div>

      <div class="links">
        <nuxt-link
          v-if="prevArticle"
          :to="prevArticle.path"
          class="prev-link"
        >← {{ prevArticle.title }}</nuxt-link>

        <nuxt-link
          v-if="nextArticle"
          :to="nextArticle.path"
          class="next-link"
        >{{ nextArticle.title }} →</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import articleList from '@/static/articleList.json'

export default {
  data() {
    return {
      article: {},
      prevArticle: null,
      nextArticle: null
    }
  },
  computed: {
    file() {
      const fileContent = require(`~/static/articles/${
        this.$route.params.slug
      }.md`)
      return fileContent
    }
  },
  created() {
    this.getArticleData()
  },
  methods: {
    /**
     * Gets data of the current, next and previous articles in the article list
     */
    getArticleData() {
      this.article = articleList.filter((a, index) => {
        if (a.path === '/' + this.$route.params.slug) {
          this.prevArticle = articleList[index - 1]
          this.nextArticle = articleList[index + 1]
          return a
        }
      })[0]
    }
  },
  head() {
    return {
      title: this.article.title + ' - Christopher Kade',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.title
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.links {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 40px;
}

.prev-link {
  margin-right: 12px;
  margin-bottom: 12px;
}

.next-link {
  margin-left: 12px;
  margin-bottom: 12px;
}

.prev-link,
.next-link {
  text-decoration: none;
  font-weight: bold;
  color: $highlight-light;
  font-size: 0.9em;
}

.prev-link:hover,
.next-link:hover {
  opacity: 0.7;
}

.article-slug {
  padding: 25px 350px 100px 350px;
}

.article-slug > h1 {
  font-size: 2em;
}

p {
  font-weight: 350;
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
  .article-slug {
    padding-left: 100px;
    padding-right: 100px;
  }
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 720px) {
  .article-slug {
    padding-left: 24px;
    padding-right: 24px;
  }

  .links {
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
}
</style>
