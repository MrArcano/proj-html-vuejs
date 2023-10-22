<script>
import NewEvent from './NewEvent.vue';
import { store } from '../../data/store';


export default {
  name: "PizzaDeals",
  components:{
    NewEvent,
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="pizza-deals d-flex">
      <div class="w-50 bg-star">
        <div class="content">
          <span class="text-06-upper">MADE WITH LOVE</span>
          <h2>DELISH PIZZA DEALS</h2>

          <NewEvent v-for="(el,index) in store.pizzaDeals" :key="'pizza_deal_'+index" :data="el" />
          
        </div>
      </div>
      <div class="w-50 h-100">
        <img src="/img/h3-img-5a.jpg" alt="">
      </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/var" as *;
  .pizza-deals{
    height: 800px;
    .bg-star{
      background-position: -15%;
      height: 87%;

      position: relative;
      .content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

      }
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
    }
  }
</style>