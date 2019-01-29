<template>
  <div>
    <Back url="/"/>
    <section class="container">
      <Experience/>
      <Education/>
      <Skills/>
      <Work/>
      <Contact/>
    </section>
  </div>
</template>

<script>
import Back from '@/components/Back'
import Experience from '@/components/Resume/Experience'
import Education from '@/components/Resume/Education'
import Skills from '@/components/Resume/Skills'
import Work from '@/components/Resume/Work'
import Contact from '@/components/Resume/Contact'

export default {
  name: 'Resume',
  components: {
    Back,
    Experience,
    Education,
    Skills,
    Work,
    Contact
  }
}
</script>
