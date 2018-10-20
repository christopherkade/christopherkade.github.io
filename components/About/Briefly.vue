<template>
  <section class="briefly">
    <Separator
      title="BRIEFLY"/>
    <div class="section">
      <h1 class="aboutText brieflyMain">Full-stack developer, open-source enthusiast and foodie.</h1>
      <h1 class="aboutText brieflySub">I'm newly graduated with a Masters in Software Engineering and currently live in Paris, France.</h1>

      <h1 class="aboutText brieflySub">I enjoy working with a multitude of web technologies and am always on the lookout for new ways to optimize and improve on my work.</h1>
    </div>
  </section>
</template>

<script>
import Separator from '@/components/Separator'

export default {
  components: {
    Separator
  }
}
</script>

<style scoped>
.section {
  text-align: center;
}

.brieflyMain {
  font-size: 2em;
  margin-bottom: 10px;
}

.brieflySub {
  font-size: 1.15em;
  color: #7f8c8d;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .brieflyMain {
    font-size: 1.5em;
  }

  .brieflySub {
    font-size: 1em;
  }
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 468px) {
  .brieflyMain {
    font-size: 1.5em;
  }

  .brieflySub {
    font-size: 1em;
    text-align: justify;
  }
}
</style>
