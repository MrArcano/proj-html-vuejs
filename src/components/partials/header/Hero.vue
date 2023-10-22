<script>
import { store } from '../../../data/store';

export default {
  name: "Hero",
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="carousel-container">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="(el,index) in store.heroCarousel"
          :key="'hCar_'+index"
          class="carousel-item"
          :class="{'active' : index === 0}">

          <div class="item-container">
            <img :src="'/img/'+ el.hrefBack" :alt="el.hrefBack">
            <img class="hover-pizza" :src="'/img/'+ el.hrefFront" :alt="el.hrefFront">
          </div>
          
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="btn-white">Prev</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="btn-white">Next</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/var" as *;

  .carousel-container{
    padding-bottom: 60px;
  }

  .item-container{
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img{
      height: 300px;
    }
    .hover-pizza{
      position: absolute;
      bottom: -50px;
      height: 370px;
    }
  }

  .carousel-inner{
    overflow: initial;
  }
</style>