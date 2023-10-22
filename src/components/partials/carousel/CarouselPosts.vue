<script>
import ItemPost from './ItemPost.vue';

export default {
  name: "Carousel",
  components:{
    ItemPost
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
            <ItemPost :item="el" />
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
  .carousel.slide{
    top: 50%;
    transform: translateY(-50%);
    .item-container{
      text-align: center;
      text-transform: uppercase;
      width: 35%;
      margin: 0 auto;
      padding: 32px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      letter-spacing: 1px;
    }
  }

</style>