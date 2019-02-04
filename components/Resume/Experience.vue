<template>
  <div>
    <Separator title="EXPERIENCE" icon="fas fa-briefcase"/>

    <Experience-Row
      logo="/img/zenika.png"
      title="Zenika"
      role="Web consulting internship"
      date="September 2018 - Present"
      desc="Developping multiple in-house projects to be used daily by the company."
    />

    <Experience-Row
      logo="/img/zenika.png"
      title="Zenika"
      role="Web consulting internship"
      date="April 2017 - July 2017"
      desc="Designing and developping a complete project management web application."
    />

    <Experience-Row
      logo="/img/e-mma.png"
      title="E-mma"
      role="Head of Communication"
      date="October 2016 - April 2017"
      desc="Helping the planning of conferences workshops and forums on the subject of gender equality in computing."
    />

    <Experience-Row
      logo="/img/info3.png"
      title="Infocubed"
      role="Software developer internship"
      date="September 2015 - November 2015"
      desc="Rewriting and redesigning of an activity report application."
    />
  </div>
</template>

<script>
import Separator from '@/components/Separator'
import ExperienceRow from '@/components/Resume/ExperienceRow'

export default {
  components: {
    Separator,
    ExperienceRow
  }
}
</script>
