<template>
  <div>
    <Separator title="SKILLS" icon="fas fa-laptop-code"/>
    <div class="columns skillColumns">
      <div v-for="skill in randomize" :key="skill.name" class="column">
        <div class="skill">
          <div class="skillBox">
            <img :src="skill.icon" class="skill-icon">
            <h4>{{ skill.name }}</h4>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="skill">
          <div class="skillBox randomizeBox" @click="shuffle">
            <img class="skill-icon" src="/icons/random.svg">
            <h4 class="refresh-title">Refresh</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Separator from '@/components/Separator'

export default {
  components: {
    Separator
  },
  data() {
    return {
      skills: [
        {
          name: 'Vue.js',
          icon: '/icons/vue.svg'
        },
        {
          name: 'Node.js',
          icon: '/icons/node.svg'
        },
        {
          name: 'Android',
          icon: '/icons/android.svg'
        },
        {
          name: 'Angular',
          icon: '/icons/angular.svg'
        },
        {
          name: 'React.js',
          icon: '/icons/react.svg'
        },
        {
          name: 'Docker',
          icon: '/icons/docker.svg'
        },
        {
          name: 'Git',
          icon: '/icons/git.svg'
        },
        {
          name: 'Spring',
          icon: '/icons/spring.svg'
        }
      ]
    }
  },
  computed: {
    /**
     * Takes 4 random elements in my skill array
     */
    randomize() {
      const skillsCopy = [...this.skills]
      const shuffled = skillsCopy.sort(() => 0.5 - Math.random())
      return shuffled.slice(0, 4)
    }
  },
  methods: {
    /**
     * Shuffles the array of skills
     */
    shuffle() {
      this.skills = this.skills.sort(() => 0.5 - Math.random())
    }
  }
}
</script>

<style lang="scss">
.skill {
  text-align: center;
  position: relative;
}

.skillBox {
  width: 120px;
  height: 120px;
  padding: 30px 10px;
  margin: 1em auto 3em;
  background: $highlight;
  border-radius: 50%;
  color: white;
}

.skillColumns {
  margin-top: 1em;
  padding-top: 25px;
}

h4 {
  color: white;
}

.skill-icon {
  width: 1.8em;
  opacity: 0.65;
}

.randomizeBox:hover {
  cursor: pointer;
}

.randomizeBox {
  background: whitesmoke;
}

.refresh-title {
  color: $primary;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .skillColumns .column {
    padding: 0;
  }
}
</style>
