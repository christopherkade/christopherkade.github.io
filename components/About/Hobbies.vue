<template>
  <section class="hobbies">
    <Separator
      title="HOBBIES"/>
    <div class="section">
      <div class="columns">
        <div class="column">
          <img
            class="hobby-icon"
            src="/icons/drum.svg" />
          <span class="hobbyTitle">Music</span>
          <span class="hobbySubtitle">I play guitar and drums when my neighbors are cool with it.</span>
        </div>
        <div class="column">
          <img
            class="hobby-icon"
            src="/icons/gamepad.svg" />
          <span class="hobbyTitle">Gaming</span>
          <span class="hobbySubtitle">PC, console; old-school, <br/>next-gen, you name it.</span>
        </div>
        <div class="column">
          <img
            class="hobby-icon"
            src="/icons/code.svg" />
          <span class="hobbyTitle">Coding</span>
          <span class="hobbySubtitle">That one's pretty obvious, but I often develop side projects.</span>
        </div>
        <div class="column">
          <img
            class="hobby-icon"
            src="/icons/dice.svg" />
          <span class="hobbyTitle">Tabletop games</span>
          <span class="hobbySubtitle">There's nothing some beer and board games can't fix.</span>
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

<style lang="scss">
.section {
  text-align: center;
}

.hobbyTitle {
  margin-top: 1em;
  font-size: 1.25em;
  display: inherit;
}

.hobbySubtitle {
  font-size: 1em;
  display: inherit;
  padding: 0 15px 0 15px;
  color: #7f8c8d;
}

.hobby-icon {
  width: 5em;
  opacity: 0.75;
}
</style>
