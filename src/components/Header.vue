<script>
import Menu from './partials/Menu.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

export default {
  name: "Header",
  components:{
    Menu
  }
}
</script>

<template>
  <header>
    <Menu />
    

    <!-- Slider -->
    <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="item-container">
              <img src="/img/h3-rev-img-1.png" alt="...">
              <img class="hover-pizza" src="/img/h3-rev-img-2.png" alt="...">
            </div>
          </div>
          <div class="carousel-item">
            <div class="item-container">
              <img src="/img/h3-rev-img-3.png" alt="...">
              <img class="hover-pizza" src="/img/h3-rev-img-4.png" alt="...">
            </div>
          </div>
          <div class="carousel-item">
            <div class="item-container">
              <img src="/img/h3-rev-img-5.png" alt="...">
              <img class="hover-pizza" src="/img/h3-rev-img-6.png" alt="...">
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
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/var" as *;

  header{
    // background-color: $header-bg-color;
    background-image: url("/img/cielostellato.PNG");
    background-position: bottom;
    color: $white-color;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 2px;

    .item-container{
      height: 400px;
      display: flex;
      justify-content: center;
      position: relative;
      img{
        height: 70%;
      }
      .hover-pizza{
        position: absolute;
        top: 5px;
        height: 85%;
      }
    }

    .carousel-control-prev, 
    .carousel-control-next{
      width: 0;
      opacity: 1;
    }

    .carousel-control-prev{
      span{
        transform: rotate(90deg);
        position: absolute;
        left: -60px;
      }
    }
    .carousel-control-next{
      span{
        transform: rotate(-90deg);
        position: absolute;
        right: -60px;
      }
    }
  }
</style>