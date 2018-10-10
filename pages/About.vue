<template>
  <section class="container">
    <Briefly />
    <Hobbies />
    <Workflow />
  </section>
</template>

<script>
import Separator from '@/components/Separator'
import Briefly from '@/components/About/Briefly'
import Hobbies from '@/components/About/Hobbies'
import Workflow from '@/components/About/Workflow'

export default {
  name: 'About',
  components: {
    Separator,
    Briefly,
    Hobbies,
    Workflow
  }
}
</script>