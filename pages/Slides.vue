<template>
  <div>
    <Back url="/"/>
    <div class="slides-wrapper columns is-multiline">
      <div v-for="s in slides" :key="s.title" class="column is-4 is-narrow">
        <Slide :slide="s"/>
      </div>
    </div>
  </div>
</template>

<script>
import Slide from '@/components/Slide'
import Back from '@/components/Back'

export default {
  components: {
    Slide,
    Back
  },
  data() {
    return {
      slides: [
        {
          title: 'The Node.js Event Loop',
          description:
            "Understanding the role, structure and workflow of Node's Event Loop.",
          url: 'https://slides.com/christopherkade/node-eventloop-en/fullscreen'
        },
        {
          title: 'Demystifying the open-source',
          description:
            'What is the open-source? Why is it wonderful? How can I participate? A talk for both devs and designers.',
          url: 'https://slides.com/christopherkade/open-source-en/fullscreen'
        }
      ]
    }
  }
}
</script>

<style>
.slides-wrapper {
  padding: 25px;
}
</style>
