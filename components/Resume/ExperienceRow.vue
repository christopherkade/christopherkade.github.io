<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-narrow">
        <img :src="logo" class="xpLogo">
      </div>
      <div class="column is-narrow xpTextMain is-3">
        <h1 class="title">{{ title }}</h1>
        <h2 class="xpRole">{{ role }}</h2>
        <h3 class="xpDate">{{ date }}</h3>
      </div>
      <div class="column is-narrow xpTextDesc is-3">
        <h1 class="xpDesc">{{ desc }}</h1>
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
    title: {
      type: String
    },
    role: {
      type: String
    },
    date: {
      type: String
    },
    desc: {
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

.xpRole {
  font-style: italic;
}

.xpLogo {
  width: 100px;
}

.xpTextMain {
  margin-top: 20px;
}

.xpTextDesc {
  margin-top: 10px;
}

.title:not(:last-child) {
  margin: 0;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .columns {
    text-align: center;
  }

  .xpTextMain,
  .xpTextDesc {
    margin: 0;
  }
}
</style>
