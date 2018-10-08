<template>
    <div class="banner-wrapper">
        <img class="bannerPhoto" />
        <div class="banner-row">
          <img class="personalPhoto" src="/img/kade.jpg" />
          <h1>Christopher Kade</h1>
          <p>Full-stack Developer</p>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.banner-wrapper {
  text-align: center;
  padding: 0 0 30px 0;
}

.personalPhoto {
  height: 175px;
  border-radius: 50%;
  border: 5px solid white;
}

.banner-row {
  padding-top: 125px;
}

.banner-wrapper h1 {
  font-weight: 300;
  font-size: 1.4em;
}

.banner-wrapper p {
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

.bannerPhoto {
  background-image: url('https://uploads.gridify.me/original/5bb1c0dcba342f7387315a55.jpg');
  background-size: cover;
  height: 250px;
  width: 100vw;
  z-index: -1;
  display: block;
  position: absolute;
}

/* Tablets (portrait) ----------- */

@media only screen and (max-width: 868px) {
  .banner-row {
    padding-top: 100px;
  }

  .bannerPhoto {
    height: 200px;
  }
}

/* Smartphones (portrait) ----------- */

@media only screen and (max-width: 468px) {
  .banner-row {
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
