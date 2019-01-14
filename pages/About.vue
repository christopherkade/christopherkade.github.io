<template>
  <div>
    <Back url="/"/>
    <section class="container">
      <Briefly/>
      <Hobbies/>
      <Workflow/>
    </section>
  </div>
</template>

<script>
import Back from '@/components/Back'
import Separator from '@/components/Separator'
import Briefly from '@/components/About/Briefly'
import Hobbies from '@/components/About/Hobbies'
import Workflow from '@/components/About/Workflow'

export default {
  name: 'About',
  components: {
    Back,
    Separator,
    Briefly,
    Hobbies,
    Workflow
  }
}
</script>
