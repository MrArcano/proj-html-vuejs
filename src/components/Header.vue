<script>
import Menu from './partials/Menu.vue'

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
            <img src="..." class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/var" as *;

  header{
    // background-color: $header-bg-color;
    background-image: url("/public/img/cielostellato.PNG");
    background-position: bottom;
    color: $header-text-color;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
</style>