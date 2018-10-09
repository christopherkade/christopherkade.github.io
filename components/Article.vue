<template>
    <section class="article">
        <nuxt-link class="articleTitle subtitle" :to="url">{{title}}</nuxt-link>
    </section>
</template>

<script>
export default {
  props: ['title', 'url']
}
</script>

<style>
.articleTitle {
  color: black;
}
</style>
