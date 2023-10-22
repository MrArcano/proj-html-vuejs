<script>
export default {
  name: "SpecialCard",
  props:{
    data: Object,
  }
}
</script>

<template>
  <div class="d-flex">
    <h5 class="price">${{data.price}}</h5>
    <div class=" ms-3 ">
      <h5>{{ data.title }}</h5>
      <p>{{ data.text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/var" as *;

  p{
    color: $p-color;
    font-size: 0.8rem;
  }

  h5{
    text-transform: uppercase;
  }

  .price{
    color: $dark-secondary-color;
  }
</style>