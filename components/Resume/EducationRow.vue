<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-narrow">
        <img
          :src="logo"
          class="edLogo"/>
      </div>
      <div class="column is-narrow edTextMain is-3">
        <h1 class="title">{{ degree }}</h1>
        <h2>{{ school }}</h2>
        <h3 class="edDate">{{ date }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    logo: {
      type: String
    },
    degree: {
      type: String
    },
    school: {
      type: String
    },
    date: {
      type: String
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 0;
  font-size: 1.25em;
}

.edLogo {
  width: 100px;
}

.title:not(:last-child) {
  margin: 0;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .columns {
    text-align: center;
  }
}
</style>
