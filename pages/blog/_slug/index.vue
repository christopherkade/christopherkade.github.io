<template>
  <div>
    <Back url="/blog"/>
    <div :key="$route.params.slug" class="articleSlug">
      <div class="container">
        <div class="contentWrapper content" v-html="file"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Back from '@/components/Back.vue'

export default {
  components: {
    Back
  },
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

<style>
.articleSlug {
  padding: 25px 50px 50px 50px;
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 468px) {
  .articleSlug {
    padding: 0px 25px 25px 25px;
  }
}
</style>
