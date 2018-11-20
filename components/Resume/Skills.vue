<template>
  <div>
    <Separator
      title="SKILLS"
      icon="fas fa-laptop-code" />
    <div class="columns skillColumns">
      <div class="column">
        <div class="skill">
          <div class="skillBox">
            <img
              class="skill-icon"
              src="/icons/vue.svg" />
            <h4>VueJS</h4>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="skill">
          <div class="skillBox">
            <img
              class="skill-icon"
              src="/icons/node.svg" />
            <h4>NodeJS</h4>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="skill">
          <div class="skillBox">
            <img
              class="skill-icon"
              src="/icons/android.svg" />
            <h4>Android</h4>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="skill">
          <div class="skillBox">
            <img
              class="skill-icon"
              src="/icons/angular.svg" />
            <h4>Angular</h4>
          </div>
        </div>
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

<style lang="scss">
.skill {
  text-align: center;
  position: relative;
}

.skillBox {
  width: 120px;
  height: 120px;
  padding: 30px 10px;
  margin: 1em auto 3em;
  background: $highlight;
  border-radius: 50%;
  color: white;
}

.skillColumns {
  margin-top: 1em;
  padding-top: 25px;
}

h4 {
  color: white;
}

.skill-icon {
  width: 1.8em;
  opacity: 0.65;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .skillColumns .column {
    padding: 0;
  }
}
</style>
