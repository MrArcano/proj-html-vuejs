<script>
export default {
  name: "Hero"
}
</script>

<template>
  <div class="carousel-container">
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
</template>

<style lang="scss" scoped>
@use "../../scss/partials/var" as *;

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
</style>