<script>
import { store } from '../../data/store';

export default {
  name: "Posts",
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="posts">
    <div id="carouselExampleAutoplaying2" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button v-for="(el,index) in store.posts" :key="'button_'+index" type="button" data-bs-target="#carouselExampleAutoplaying2" :data-bs-slide-to="index" :class="{'active' : index === 0}" aria-current="true" :aria-label="'Slide '+index"></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(el,index) in store.posts"
          :key="'post_'+index"
          class="carousel-item"
          :class="{'active' : index === 0}">
          <div class="item-container">
            <span class="quote">&#8220;</span>
            <h5>&ldquo; {{ el.text }}  &rdquo;</h5>
            <span class="text-06-upper"> {{ el.source }} </span>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
        <span class="btn-white">Prev</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
        <span class="btn-white">Next</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/var" as *;
  .posts{
    background-image: url("/img/h3-testimonials-bckgrnd.jpg");
    background-size: cover;
    width: 100%;
    aspect-ratio: 1920/459;
    overflow: hidden;
    position: relative;
    #carouselExampleAutoplaying2{
      top: 50%;
      transform: translateY(-50%);
    }
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
      .quote{
        color: $gold-color;
        font-size: 12rem;
        height: 70px;
        line-height: 150px;
      }
    }
  }
</style>