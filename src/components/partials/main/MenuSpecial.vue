<script>
import SpecialCard from './SpecialCard.vue'
import { store } from '../../../data/store';


export default {
  name: "MenuSpecial",
  components:{
    SpecialCard
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="d-flex">
    <div class="left">
      <img src="/img/h1-img-4.jpg" alt="">
      <img class="hover" src="/img/h1-img-7n.png" alt="">
    </div>
    <div class="right">
      <div class="special">
        <h2>SPECIALS*</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quae.</p>

        <SpecialCard v-for="(el,index) in store.menuSpecial" :key="'mSpec_'+index" :data="el" />

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/var" as *;

  .left,
  .right{
    width: 50%;
    position: relative;
  }

  .hover,
  .special{
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  


</style>