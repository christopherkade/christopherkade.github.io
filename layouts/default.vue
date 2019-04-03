<template>
  <div :class="{ 'darkTheme': this.$store.state.isDark }" class="layout-wrapper">
    <contact-bar class="contact-bar-side"/>
    <theme-selector/>
    <nuxt-link to="/" class="index-link">
      <h1 class="layout-title"><span>C</span>HRISTOPHER <span>K</span>ADE</h1>
    </nuxt-link>
    <nuxt/>
    <contact-bar class="contact-bar-bottom"/>
  </div>
</template>

<script>
import ContactBar from '@/components/ContactBar'
import ThemeSelector from '@/components/ThemeSelector'

export default {
  components: {
    ContactBar,
    ThemeSelector
  }
}
</script>


<style lang="scss">
.layout-wrapper {
  padding: 12px;
  background-color: $background-light;
  transition: background-color 100ms ease-in-out, color 100ms ease;
}

.index-link {
  text-align: center;
  text-decoration: none;
  color: $text-light;
  background-color: transparent;
}

.layout-title {
  font-weight: 400;
}

.layout-title > span {
  color: $highlight-light;
}

.contact-bar-bottom {
  display: none;
}

.darkTheme {
  color: $text-dark;
  background-color: $background-dark;

  .index-link {
    color: $text-dark;
  }

  .layout-title > span {
    color: $highlight-dark;
  }

  .icon {
    filter: invert(1);
  }

  .article-date {
    color: $text-dark;
  }

  .article-title {
    background: transparent;
  }

  .article-title > a {
    color: $highlight-dark;
  }

  .article-description {
    color: $text-dark;
  }

  .article-subtitle > span {
    color: $text-dark;
  }

  p > a,
  li > a,
  h1 > a {
    color: $highlight-dark;
  }

  p {
    font-weight: 250;
  }

  .prev-link,
  .next-link {
    color: $highlight-dark;
  }

  blockquote {
    color: $text-light;
  }
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 720px) {
  .index-link {
    font-size: 0.9em;
  }

  .index-link > h1 {
    margin-top: 50px;
  }

  .layout-wrapper > .contact-bar-bottom {
    display: block;
  }

  .layout-wrapper > .contact-bar-side {
    display: none;
  }
}
</style>
