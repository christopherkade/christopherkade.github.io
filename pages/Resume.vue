<template>
  <section class="container">
    <Experience />
    <Education />
    <Skills />
    <Work />
    <Contact />
  </section>
</template>

<script>
import Experience from '@/components/Resume/Experience'
import Education from '@/components/Resume/Education'
import Skills from '@/components/Resume/Skills'
import Work from '@/components/Resume/Work'
import Contact from '@/components/Resume/Contact'

export default {
  name: 'Resume',
  components: {
    Experience,
    Education,
    Skills,
    Work,
    Contact
  }
}
</script>

<style lang="scss" scoped>
</style>
