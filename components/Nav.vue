<template>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <nuxt-link to="/about">
        <a class="button">
          <span class="icon">
            <img src="/icons/user.svg">
          </span>
          <span>About</span>
        </a>
      </nuxt-link>
    </div>
    <div class="column is-narrow">
      <nuxt-link to="/resume">
        <a class="button">
          <span class="icon">
            <img class="resume" src="/icons/resume.svg">
          </span>
          <span>Resume</span>
        </a>
      </nuxt-link>
    </div>
    <div class="column is-narrow">
      <nuxt-link to="/blog">
        <a class="button">
          <span class="icon">
            <img src="/icons/pencil.svg">
          </span>
          <span>Blog</span>
        </a>
      </nuxt-link>
    </div>
    <div class="column is-narrow">
      <nuxt-link to="/slides">
        <a class="button">
          <span class="icon">
            <img src="/icons/slides.svg">
          </span>
          <span>Slides</span>
        </a>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.button {
  font-size: 2em;
  background-color: #fcfcfc;
  border: none;
  width: auto;
}

.button:hover {
  background-color: #c7c7c7;
}

.columns {
  margin-top: 35px;
}

.icon img {
  width: 0.9em;
  opacity: 0.75;
}

.icon .resume {
  width: 0.65em;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .columns {
    text-align: center;
    margin-top: 0;
  }

  .button {
    width: 80%;
  }
}
</style>
