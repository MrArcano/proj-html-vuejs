<script>
export default {
  name:"PizzaList"
}
</script>

<template>
  <div class="text">
    <span class="choose">CHOOSE YOUR FLAVOR</span>
    <h2>THE BEST PIZZA MENU IN TOWN</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi a maxime vel earum. Fugiat nulla et similique? Nulla, hic.</p>
  </div>

  <div class="slider-container">
    SLIDER
  </div>
  
</template>

<style lang="scss" scoped>
@use "../../scss/partials/var" as *;

.text{
  width: 500px;
  margin: 0 auto;
  text-align: center;
}
  .choose{
    color: $orange-color;
    font-size: 0.6rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

</style>