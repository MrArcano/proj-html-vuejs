<script>
export default {
  name: "CarouselItem",
  props:{
    item: Object,
  }
}
</script>

<template>
    <span class="quote">&#8220;</span>
    <h5>&ldquo; {{ item.text }}  &rdquo;</h5>
    <span class="text-06-upper"> {{ item.source }} </span>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/var" as *;

  .quote{
    color: $important-color;
    font-size: 12rem;
    height: 70px;
    line-height: 150px;
  }
</style>