<template>
  <div :class="{ 'darkTheme': this.$store.state.isDark }" class="layout-wrapper">
    <contact-bar class="contact-bar-side"/>
    <theme-selector/>
    <nuxt-link to="/" class="layout-title">
      <h1>CHRISTOPHER KADE</h1>
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

.layout-title {
  text-align: center;
  text-decoration: none;
  color: $text-light;
  background-color: transparent;
}

.contact-bar-bottom {
  display: none;
}

.darkTheme {
  color: $text-dark;
  background-color: $background-dark;

  .layout-title {
    color: $text-dark;
  }

  .icon {
    filter: invert(1);
  }

  .article-date {
    color: $highlight-dark;
  }

  .article-title {
    background: transparent;
  }

  p > a,
  li > a,
  h1 > a {
    color: $highlight-dark;
  }

  .prev-link,
  .next-link {
    color: $highlight-dark;
  }
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 720px) {
  .layout-title {
    font-size: 0.9em;
  }

  .layout-title > h1 {
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
