<template>
  <div class="back">
    <nuxt-link :to="url">
      <img class="back-icon" src="/icons/back-arrow.svg">
      <span class="back-text">Back</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    }
  }
}
</script>

<style>
.back {
  margin-left: 25px;
  margin-bottom: 25px;
}

.back-icon {
  width: 25px;
  vertical-align: middle;
}

.back-text {
  font-size: 1.5em;
  vertical-align: middle;
  color: #363636;
}

@media only screen and (max-width: 868px) {
  .back {
    margin-bottom: 25px;
  }
}

@media only screen and (max-width: 468px) {
  .back {
    text-align: center;
    margin: 0 0 25px 0;
  }
}
</style>
