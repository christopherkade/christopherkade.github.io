<template>
  <section class="container">
    <Experience />
    <Education />
    <Skills />
    <Contact />
  </section>
</template>

<script>
import Experience from '@/components/Resume/Experience'
import Education from '@/components/Resume/Education'
import Skills from '@/components/Resume/Skills'
import Contact from '@/components/Resume/Contact'

export default {
  name: 'Resume',
  components: {
    Experience,
    Education,
    Skills,
    Contact
  }
}
</script>

<style lang="scss" scoped>
</style>
