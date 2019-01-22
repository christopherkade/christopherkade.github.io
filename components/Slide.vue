<template>
  <a :href="slide.url" class="slide-wrapper">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ slide.title }}</p>
          </div>
        </div>
        <div class="content">{{ slide.description }}</div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    slide: Object
  }
}
</script>

<style>
.card {
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}
</style>
