<template>
  <div>
    <Separator title='WORK' icon='fas fa-file-code' />
    <carousel class="projectCarousel" 
      :navigationEnabled="true"
      :paginationEnabled="false"
      :autoplayTimeout="3000"
      :autoplayHoverPause="true"
      :autoplay="true"
      :perPageCustom="[[768, 2], [1024, 4]]"
      :perPage=1>
      <slide v-for="project in projects" :key="project.id">
        <a class="projectLink" :href="project.html_url">
          <div class="card projectCard">
            <div class="card-header">
              <p class="card-header-title">
                {{project.name}}
              </p>
            </div>
            <div class="card-content">
              <div class="content">
                {{project.description}}
              </div>
            </div>
          </div>
        </a>
      </slide>
    </carousel>
  </div>
</template>

<script>
import axios from 'axios'
import { Carousel, Slide } from 'vue-carousel'
import Separator from '@/components/Separator'

export default {
  data() {
    return {
      projects: []
    }
  },
  components: {
    Separator,
    Carousel,
    Slide
  },
  async mounted() {
    let { data } = await axios.get(
      `https://api.github.com/users/christopherkade/repos`
    )
    this.projects = data
  }
}
</script>

<style lang="scss">
.projectCarousel {
  padding: 25px;
}

.projectCard {
  margin: 25px;
  border: 1px #e1e4e8 solid;
  box-shadow: none;
  height: 185px;
}

.projectLink:hover {
  opacity: 0.5;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .projectCard {
    margin: 0 10px 0 0;
  }
}
</style>
