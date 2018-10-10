<template>
  <div>
    <Separator title='CONTACT' icon='fas fa-envelope' />

    <div class="columns is-centered">
      <div class="column is-narrow is-2">
        <a href="https://www.linkedin.com/in/christopher-kade/">
          <i class="fab fa-linkedin-in fa-5x"></i>
        </a>
      </div>
      <div class="column is-narrow is-2">
        <a href="https://github.com/christopherkade">
          <i class="fab fa-github-alt fa-5x"></i>
        </a>
      </div>
      <div class="column is-narrow is-2">
        <a href="mailto:c.kade96@gmail.com">
          <i class="fas fa-envelope fa-5x"></i>
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

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .columns {
    text-align: center;
  }
}
</style>
