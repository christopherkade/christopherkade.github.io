<template>
  <div class="bannerWrapper">
    <img
      :class="{ bannerSmall: this.$store.state.navAnimation, bannerNormal: !this.$store.state.navAnimation }"
      class="bannerPhoto"
    >
    <div
      :class="{ rowUp: this.$store.state.navAnimation, rowDown: !this.$store.state.navAnimation }"
      class="bannerRow"
    >
      <img class="personalPhoto" src="/img/chris.jpg">
      <h1>Christopher Kade</h1>

      <p>Full-Stack Developer</p>
    </div>
  </div>
</template>

<style lang="scss">
.bannerWrapper {
  text-align: center;
  padding: 0 0 30px 0;
}

.bannerRow {
  padding-top: 125px;
  transition: padding-top 1s;
}

.bannerWrapper h1 {
  font-weight: 300;
  font-size: 1.4em;
}

.bannerWrapper p {
  font-size: 1em;
  margin: 0.5em 0 0.6em;
  display: inline-block;
  font-style: italic;
  padding: 6px 10px;
  background: $highlight;
  color: white;
  border-radius: 4px;
  line-height: 1;
}

.personalPhoto {
  height: 175px;
  border-radius: 50%;
  border: 5px solid white;
}

.bannerPhoto {
  background-image: url('/img/SF.jpg');
  background-size: cover;
  height: 250px;
  width: 100vw;
  z-index: -1;
  display: block;
  position: absolute;
  transition: height 1s;
}

.rowUp {
  padding-top: 25px;
}

.rowDown {
  padding-top: 125px;
}

.bannerSmall {
  height: 150px;
}

.bannerNormal {
  height: 250px;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .bannerRow {
    padding-top: 100px;
  }

  .bannerPhoto {
    height: 200px;
  }
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 468px) {
  .bannerRow {
    padding-top: 75px;
  }

  .personalPhoto {
    height: 150px;
  }

  .bannerPhoto {
    height: 150px;
  }
}
</style>
