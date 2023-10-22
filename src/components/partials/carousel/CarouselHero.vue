<script>
import ItemHero from './ItemHero.vue';

export default {
  name: "Carousel",
  components:{
    ItemHero
  },
  props:{
    withCarouselIndicator: Boolean,
    idCarousel: String,
    itemArray: Array
  }
}
</script>

<template>
    <div :id="idCarousel" class="carousel slide" data-bs-ride="carousel">
      
      <div v-if="withCarouselIndicator" class="carousel-indicators">

        <!-- crea un button per ogni item dell'array -->
        <button
          v-for="el,index in itemArray"
          :key="'button_'+index"
          type="button"
          :data-bs-target="'#'+idCarousel"
          :data-bs-slide-to="index"
          :class="{'active' : index === 0}"
          aria-current="true"
          :aria-label="'Slide '+index"></button>

      </div>

      <div class="carousel-inner">

        <div
          v-for="(el,index) in itemArray"
          :key="idCarousel+'_'+index"
          class="carousel-item"
          :class="{'active' : index === 0}">

          <div class="item-container">
            <ItemHero :item="el" />
          </div>

        </div>

      </div>
      <button class="carousel-control-prev" type="button" :data-bs-target="'#'+idCarousel" data-bs-slide="prev">
        <span class="btn-white">Prev</span>
      </button>
      <button class="carousel-control-next" type="button" :data-bs-target="'#'+idCarousel" data-bs-slide="next">
        <span class="btn-white">Next</span>
      </button>
    </div>
</template>

<style lang="scss" scoped>
  .item-container{
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .carousel-inner{
    overflow: initial;
  }

</style>