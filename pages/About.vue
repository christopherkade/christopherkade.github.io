<template>
  <section class="container">
    <section class="briefly">
      <Separator title='BRIEFLY' icon='fas fa-user-astronaut'/>
    </section>

    <section class="hobbies">
      <Separator title='HOBBIES' icon='fas fa-bicycle'/>
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
</style>
