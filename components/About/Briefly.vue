<template>
    <section class="briefly">
      <Separator title='BRIEFLY' icon='fas fa-user-astronaut'/>

      <div class="section">
        <h1 class="aboutText brieflyMain">Full-stack developer, open-source enthusiast and foodie.</h1>
        <h1 class="aboutText brieflySub">Newly graduated and constantly working on my craft, I'm always open to new project ideas.</h1>
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
}

.brieflySub {
  font-size: 1.25em;
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
    font-size: 1em;
  }

  .brieflySub {
    font-size: 0.75em;
  }
}
</style>
