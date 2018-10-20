<template>
  <div>
    <Separator
      title="SKILLS"
      icon="fas fa-laptop-code" />
    <div class="columns skillColumns">
      <div class="column">
        <div class="skill">
          <div class="skillBox">
            <i class="fab fa-vuejs fa-2x"></i>
            <h4>VueJS</h4>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="skill">
          <div class="skillBox">
            <i class="fab fa-node-js fa-2x"></i>
            <h4>NodeJS</h4>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="skill">
          <div class="skillBox">
            <i class="fab fa-android fa-2x"></i>
            <h4>Android</h4>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="skill">
          <div class="skillBox">
            <i class="fab fa-angular fa-2x"></i>
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

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .skillColumns .column {
    padding: 0;
  }
}
</style>
