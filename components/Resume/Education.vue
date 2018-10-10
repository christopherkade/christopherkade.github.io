<template>
  <div>
    <Separator title='EDUCATION' icon='fas fa-graduation-cap' />

    <EducationRow
      logo='https://gitlab.clementdugal.fr/uploads/-/system/group/avatar/4/epitech.png'
      degree='Master of Computer Software Engineering'
      school='Epitech, Paris, France'
      date='2017-2019' />

    <EducationRow
      logo='https://study-eu.s3.amazonaws.com/uploads/university/dublin-city-university--dcu--445-logo.png'
      degree='Computing (year abroad)'
      school='DCU, Dublin, Ireland'
      date='2017-2018' />

    <EducationRow
      logo='https://gitlab.clementdugal.fr/uploads/-/system/group/avatar/4/epitech.png'
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
