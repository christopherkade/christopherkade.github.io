<template>
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
</template>

<script>
import Separator from '@/components/Separator'

export default {
  components: {
    Separator
  }
}
</script>

<style>
.workflow {
  text-align: center;
  position: relative;
}

.workflowArrow:before {
  content: '▶';
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
  background: #eaeeef;
  border-radius: 50%;
}

.workflowColumns {
  margin-top: 1em;
  padding-top: 25px;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .workflowColumns .column {
    padding: 0;
  }
}
</style>
