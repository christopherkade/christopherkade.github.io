<template>
  <section class="blog-wrapper">
    <section class="container">
      <div class="section">
        <h1 class="title">My thoughts put into words</h1>
        
        <div class="articles">

          <Article 
            title='Rewriting my website using NuxtJS'
            url='/blog/website-nuxt' />

          <Separator />

          <Article 
            title='How to start contributing to the open-source community'
            url='/blog/open-source' />

          <Separator />

          <Article
            title='Rewriting my website using Vue'
            url='/blog/website-vue' />

          <Separator />

          <Article
            title='2017 in review - The multiple designs of christopherkade.com'
            url='/blog/website-design' />

          <Separator />

          <Article
            title='Optimizing the performance of my personal website'
            url='/blog/optimisation' />

          <Separator />

          <Article
            title='Developing the Star Wars opening crawl in HTML/CSS'
            url='/blog/star-wars' />

          <Separator />

          <Article
            title='Deploying an API to Heroku'
            url='/blog/heroku-api' />

          <Separator />

          <Article
            title='Coding a desktop app with Electron and Angular'
            url='/blog/intro-electron' />

          <Separator />

          <Article
            title='Serving your Github pages custom domain using HTTPS'
            url='/blog/ssh-githubpages' />

          <Separator />

          <Article
            title='Discovering React - The basics'
            url='/blog/intro-reactjs' />

          <Separator />

          <Article
            title='Define quality requirements for your projects'
            url='/blog/requirements' />

          <Separator />

          <Article
            title='My journey discovering Phaser, an HTML5 game framework'
            url='/blog/intro-phaser' />

          <Separator />

          <Article
            title='Deploy a project page or a custom subdomain on Github pages'
            url='/blog/subdomain-githubpages' />

          <Separator />

          <Article
            title='Create and deploy a Jekyll blog to Github pages'
            url='/blog/jekyll-blog' />

        </div>        
      </div>
    </section>
  </section>
</template>

<script>
import Separator from '@/components/Separator'
import Article from '@/components/Article'

export default {
  name: 'Blog',
  components: {
    Separator,
    Article
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
