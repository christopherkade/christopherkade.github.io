<template>
  <section class="workflow">
    <Separator
      title="WORKFLOW"/>
    <div class="columns workflowColumns">
      <div class="column">
        <div class="workflow">
          <div class="workflowBox workflowArrow">
            <img
              class="workflow-icon icon-lightbulb"
              src="/icons/lightbulb.svg" />
            <h4>Ideation</h4>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="workflow workflowArrow">
          <div class="workflowBox">
            <img
              class="workflow-icon icon-code"
              src="/icons/code.svg" />
            <h4>Coding</h4>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="workflow workflowArrow">
          <div class="workflowBox">
            <img
              class="workflow-icon"
              src="/icons/vial.svg" />
            <h4>Testing</h4>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="workflow">
          <div class="workflowBox">
            <img
              class="workflow-icon"
              src="/icons/upload.svg" />
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

<style lang="scss">
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

.workflow-icon {
  width: 1.8em;
  opacity: 0.75;
}

.icon-lightbulb {
  width: 1.25em;
}

.icon-code {
  width: 2em;
}

h4 {
  color: $highlight;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 770px) {
  .workflowColumns .column {
    padding: 0;
  }

  .workflowArrow:before {
    display: none;
  }
}
</style>
