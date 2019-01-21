<template>
  <div>
    <Separator title="CONTACT" icon="fas fa-envelope"/>

    <div class="columns is-centered">
      <div class="column is-narrow is-2">
        <a href="https://www.linkedin.com/in/christopher-kade/">
          <img class="contact-icon" src="/icons/linkedin.svg">
        </a>
      </div>
      <div class="column is-narrow is-2">
        <a href="https://github.com/christopherkade">
          <img class="contact-icon" src="/icons/github.svg">
        </a>
      </div>
      <div class="column is-narrow is-2">
        <a href="https://twitter.com/christo_kade">
          <img class="contact-icon" src="/icons/twitter.svg">
        </a>
      </div>
      <div class="column is-narrow is-2">
        <a href="mailto:c.kade96@gmail.com">
          <img class="contact-icon" src="/icons/email.svg">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Separator from '@/components/Separator'

export default {
  components: {
    Separator
  }
}
</script>

<style lang='scss' scoped>
.columns {
  padding: 50px;
}

.column a {
  color: #4a4a4a;
}

.column a:hover {
  color: $highlight;
}

.contact-icon {
  width: 4.5em;
  opacity: 0.7;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .columns {
    text-align: center;
  }
}
</style>
