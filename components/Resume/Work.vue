<template>
  <div class="work-wrapper">
    <Separator title="THINGS I'VE MADE" icon="fas fa-file-code"/>

    <div class="projects-wrapper">
      <h1 class="subtitle open-source">Some of my open-source projects</h1>
      <div class="columns is-multiline projects">
        <a
          v-for="project in OSSProjects"
          :key="project.name"
          :href="project.url"
          class="project column is-3"
        >
          <article class="message oss-message">
            <div class="message-body">
              <h1 class="subtitle project-name">
                {{ project.name }}
                <img class="link-icon" src="/icons/link.svg">
              </h1>
              <p class="project-desc">{{ project.description }}</p>
              <span v-for="tech in project.stack" :key="tech" class="tag tech">{{ tech }}</span>
            </div>
          </article>
        </a>
      </div>

      <h1 class="subtitle">Projects done during various internships</h1>
      <div class="columns is-multiline projects">
        <div
          v-for="project in ProProjects"
          :key="project.name"
          :href="project.url"
          class="project column is-3"
        >
          <article class="message">
            <div class="message-body">
              <h1 class="subtitle project-name">{{ project.name }}</h1>
              <p class="project-desc">{{ project.description }}</p>
              <span v-for="tech in project.stack" :key="tech" class="tag tech">{{ tech }}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Separator from '@/components/Separator'

export default {
  components: {
    Separator
  },
  data() {
    return {
      OSSProjects: [
        {
          name: 'Snippet',
          description: 'Create elegant code snippets',
          url: 'https://github.com/christopherkade/snippet',
          stack: ['Angular']
        },
        {
          name: 'Parks',
          description: 'Get wait-times for most Disneyland Parks in the world',
          url: 'https://github.com/christopherkade/parks',
          stack: ['Angular']
        },
        {
          name: 'STracker',
          description: 'Basic spending tracker',
          url: 'https://github.com/christopherkade/STracker',
          stack: ['Vue', 'Firebase']
        },
        {
          name: 'Start Coding',
          description: 'Get coding documentation after a short quiz',
          url: 'https://github.com/christopherkade/start-coding',
          stack: ['Angular']
        }
      ],
      ProProjects: [
        {
          name: 'AYA Team',
          description: 'Control a team preview web page using your phone',
          stack: ['React', 'Node', 'WebRTC', 'Travis']
        },
        {
          name: 'PMOSoft',
          description: 'Project management web application',
          stack: ['Angular', 'Spring']
        },
        {
          name: 'Activity Report',
          description:
            'Intranet with a ticketing, reporting and calendar system',
          stack: ['ASP .NET']
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.project-name {
  font-size: 1.1em;
}

.project-desc {
  font-size: 0.9em;
}

.projects-wrapper {
  padding: 0 25px 0 25px;
}

.tag:not(body) {
  background-color: $highlight;
  color: white;
}

.tech {
  margin: 10px 5px 0 0;
}

.oss-message:hover {
  opacity: 0.75;
}

.message-header {
  background-color: $highlight;
}

.link-icon {
  width: 1em;
  opacity: 0.65;
  margin-left: 5px;
}

.work-wrapper {
  margin-bottom: 50px;
}

.open-source {
  margin-top: 50px;
}
</style>
