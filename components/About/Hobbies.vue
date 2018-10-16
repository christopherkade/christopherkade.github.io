<template>
  <section class="hobbies">
    <Separator
      title="HOBBIES"
      icon="fas fa-bicycle"/>
    <div class="section">
      <div class="columns">
        <div class="column">
          <i class="fas fa-drum fa-5x"></i>
          <span class="aboutText hobbyTitle">Music</span>
        </div>
        <div class="column">
          <i class="fas fa-gamepad fa-5x"></i>
          <span class="aboutText hobbyTitle">Gaming</span>
        </div>
        <div class="column">
          <i class="fas fa-code fa-5x"></i>
          <span class="aboutText hobbyTitle">Coding</span>
        </div>
      </div>
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

.hobbyTitle {
  margin-top: 1em;
  font-size: 1.25em;
  display: inherit;
}
</style>
