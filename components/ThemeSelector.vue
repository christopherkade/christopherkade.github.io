<template>
  <label class="switch">
    <input type="checkbox" @click="switchTheme">
    <span class="slider round">
      <div class="switch-night"></div>
    </span>
  </label>
</template>

<script>
export default {
  methods: {
    switchTheme() {
      this.$store.commit('switchTheme')
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  z-index: 1;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  z-index: -1;
}

.switch-night:after {
  position: absolute;
  content: '🌙';
  height: 26px;
  width: 26px;
  right: -4px;
  bottom: 4px;
  top: calc(50% - 9px);
  z-index: 0;
}

.switch-night {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  z-index: 1;
}

.slider:after {
  content: '🔆';
  top: calc(50% - 9px);
  position: absolute;
  left: 4px;
  z-index: 0;
}

input:checked + .slider {
  background-color: black;
}

input:focus + .slider {
  box-shadow: 0 0 1px black;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 2px;
}

.slider.round:before {
  border-radius: 2px;
}
</style>
