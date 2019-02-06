<template>
  <div class="contact-bar-wrapper">
    <a href="https://github.com/christopherkade">
      <img class="icon" src="/icons/github.svg">
    </a>
    <a href="https://www.linkedin.com/in/christopher-kade/">
      <img class="icon" src="/icons/linkedin.svg">
    </a>
    <a href="https://twitter.com/christo_kade">
      <img class="icon" src="/icons/twitter.svg">
    </a>
  </div>
</template>

<style lang="scss">
.contact-bar-wrapper {
  position: fixed;
  margin-right: 24px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

.contact-bar-wrapper > a > img {
  width: 50px;
}

.contact-bar-wrapper > a > img:hover {
  opacity: 0.7;
  cursor: pointer;
}

@media only screen and (max-width: 720px) {
  .contact-bar-wrapper > a {
    margin: 12px;
  }

  .contact-bar-wrapper {
    width: 100%;
    position: relative;
    height: auto;
    margin-bottom: 20px;
    margin-right: 0;
    text-align: center;
  }
}
</style>
