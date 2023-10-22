<script>
import CarouselHero from '../carousel/CarouselHero.vue';
import { store } from '../../../data/store';

export default {
  name: "Hero",
  components:{
    CarouselHero
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="carousel-container">
    <CarouselHero :withCarouselIndicator="false" :idCarousel="'carousel-hero'"
    :itemArray="store.heroCarousel" />    
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/var" as *;

  .carousel-container{
    padding-bottom: 60px;
  }
</style>