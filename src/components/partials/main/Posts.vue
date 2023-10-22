<script>
import CarouselPosts from '../carousel/CarouselPosts.vue';
import { store } from '../../../data/store';

export default {
  name: "Posts",
  components:{
    CarouselPosts
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="posts">
    <CarouselPosts :withCarouselIndicator="true" :idCarousel="'carousel-post'"
    :itemArray="store.posts" />
  </div>
</template>

<style lang="scss" scoped>
  .posts{
    background-image: url("/img/h3-testimonials-bckgrnd.jpg");
    background-size: cover;
    width: 100%;
    aspect-ratio: 1920/459;
    overflow: hidden;
    position: relative;
  }
</style>