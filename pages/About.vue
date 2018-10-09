<template>
  <section class="container">
    <section class="briefly">
      <Separator title='BRIEFLY' icon='fas fa-user-astronaut'/>

      <div class="section">
        <h1 class="aboutText brieflyMain">Full-stack developer, open-source enthusiast and foodie.</h1>
        <h1 class="aboutText brieflySub">Newly graduated and constantly working on my craft, I'm always open to new project ideas.</h1>
      </div>
        
    </section>

    <section class="hobbies">
      <Separator title='HOBBIES' icon='fas fa-bicycle'/>

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

    <section class="workflow">
      <Separator title='WORKFLOW' icon='fas fa-code-branch'/>

      <div class="columns workflowColumns">
          <div class="column">
            <div class="workflow">
              <div class="workflowBox workflowArrow">
                <i class="fas fa-lightbulb fa-2x"></i>
                <h4>Ideation</h4>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="workflow workflowArrow">
              <div class="workflowBox">
                <i class="fas fa-code fa-2x"></i>
                <h4>Coding</h4>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="workflow workflowArrow">
              <div class="workflowBox">
                <i class="fas fa-vial fa-2x"></i>
                <h4>Testing</h4>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="workflow">
              <div class="workflowBox">
                <i class="fas fa-upload fa-2x"></i>
                <h4>Publishing</h4>
              </div>
            </div>
          </div>
      </div>
    </section>
  </section>
</template>

<script>
import Separator from '@/components/Separator'

export default {
  name: 'About',
  components: {
    Separator
  }
}
</script>

<style lang="scss" scoped>
.section {
  text-align: center;
}

.subtitle {
  margin-bottom: 0;
}

.aboutText {
  color: #4a4a4a;
  font-weight: 400;
  line-height: 1.25;
}

.brieflyMain {
  font-size: 2em;
}

.brieflySub {
  font-size: 1.25em;
}

.hobbyTitle {
  margin-top: 1em;
  font-size: 1.25em;
  display: inherit;
}

.workflow {
  text-align: center;
  position: relative;
}

.workflowArrow:before {
  content: '=>';
  position: absolute;
  top: 50%;
  margin-top: -10px;
  right: -30px;
  font-family: FontAwesome;
}

.workflowBox {
  width: 120px;
  height: 120px;
  padding: 30px 10px;
  margin: 1em auto 3em;
  background: $highlight;
  border-radius: 50%;
}

.workflowColumns {
  margin-top: 1em;
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
