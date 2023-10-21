<script>
import SliderPizza from './SliderPizza.vue';

export default {
  name:"PizzaList",
  components:{
    SliderPizza
  }
}
</script>

<template>
  <div class="pizza-list">
    <div class="text">
      <span class="choose">CHOOSE YOUR FLAVOR</span>
      <h2>THE BEST PIZZA MENU IN TOWN</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi a maxime vel earum. Fugiat nulla et similique? Nulla, hic.</p>
    </div>

    <div class="slider">
      <SliderPizza />
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use "../../scss/partials/var" as *;

.pizza-list{
  padding: 64px 0;
}
.text{
  width: 500px;
  margin: 0 auto;
  text-align: center;
  .choose{
    color: $orange-color;
    font-size: 0.6rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  p{
    font-size: 0.9rem;
  }
}

.slider{

  margin: 0 auto;
}

</style>