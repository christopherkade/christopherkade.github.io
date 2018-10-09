<template>
    <h2 class="sep-title">
        <span>
            <i class="faIcon" :class="icon"></i>
            {{title}}
        </span>
    </h2>
</template>

<script>
export default {
  props: ['title', 'icon']
}
</script>

<style>
.sep-title {
  position: relative;
  margin-bottom: 1em;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: left;
}

.sep-title::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: 3px;
  width: 100%;
  border-bottom: 4px solid #f4f6f7;
}

.sep-title span {
  position: relative;
  display: inline-block;
  padding-right: 1.4em;
  background: #fff;
}

@media only screen and (max-width: 1080px) {
  .sep-title span {
    padding-left: 1em;
  }
}
</style>
