<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
 import { FreeMode, Pagination, Navigation } from 'swiper/modules';

import PizzaCard from './PizzaCard.vue';

import { store } from '../../data/store';

export default {
  name: "SliderPizza",
  components:{
    Swiper,
    SwiperSlide,
    PizzaCard
  },
  data() {
    return {
      store
    }
  },
  setup() {
      return {
        modules: [FreeMode, Pagination, Navigation],
      };
    },
}
</script>

<template>
    <swiper
    :slidesPerView="6"
    :spaceBetween="10"
    :loop="true"
    :navigation="false"
    :grabCursor="true"
    :freeMode="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(el,index) in store.pizzaList" :key="'pizza_'+index">
      <PizzaCard :pizza="el" /> 
    </swiper-slide>
    <swiper-slide v-for="(el,index) in store.pizzaList" :key="'pizza_'+index">
      <PizzaCard :pizza="el" /> 
    </swiper-slide>

  </swiper>
</template>

<style lang="scss" scoped>
</style>