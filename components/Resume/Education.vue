<template>
  <div>
    <Separator title='EDUCATION' icon='fas fa-graduation-cap' />

    <EducationRow
      logo='/img/epitech.png'
      degree='Master of Computer Software Engineering'
      school='Epitech, Paris, France'
      date='2017-2019' />

    <EducationRow
      logo='/img/dcu.png'
      degree='Computing (year abroad)'
      school='DCU, Dublin, Ireland'
      date='2017-2018' />

    <EducationRow
      logo='/img/epitech.png'
      degree='Bachelor of Computer Software Engineering'
      school='Epitech, Paris, France'
      date='2014-2017' />
  </div>
</template>

<script>
import Separator from '@/components/Separator'
import EducationRow from '@/components/Resume/EducationRow'

export default {
  components: {
    Separator,
    EducationRow
  }
}
</script>

<style>
</style>
