<script>
import Mustache from '../svg_vue/Mustache.vue';
import Scooter from '../svg_vue/Scooter.vue';
import Magnifying from '../svg_vue/Magnifying.vue';

import { store } from '../../../data/store';

  export default {
  name: "Menu",
  components:{
    Mustache,
    Scooter,
    Magnifying
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="menu">
    <div class="left">
      <a href="#" class="btn-orange">ORDER ONLINE</a>
    </div>
    <nav class="center">
      <ul>
        <li v-for="(el,index) in store.navMenu" :key="'elMenu_'+index">
          <a :href="el.href">
            <div v-if="el.imgSrc === null" class="d-flex align-items-center">
              <div v-if="el.icon" class="icon-white"><Mustache /></div>{{ el.title }}
            </div>
            <img v-else :src="el.imgSrc" :alt="el.title">
          </a>
        </li>
      </ul>
    </nav>
    <div class="right">

      <a href="#" class="shopping-btn d-flex align-items-center">
        <div class="icon-white">
          <Scooter />
        </div>
        <span>Cart</span>
        <span class="shopping-counter">{{ store.shoppingCounter }}</span>
      </a>

      <a href="#" class="d-flex align-items-center">
        <div class="icon-white">
          <Magnifying />
        </div>
        <span>Search</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/var" as *;
  .menu{
    padding: 8px;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
      color: $white-color;
    }

    >.left{
      width: 15%;
      
    }
    >.center{
      display: flex;
      align-items: center;
      ul{
        list-style: none;
        display: flex;
        align-items: center;
        gap: 32px;
        margin: 0;
      }
      img{
        width: 140px;
        min-width: 140px;
      }
    }
    >.right{
      width: 15%;
      display: flex;
      justify-content: flex-end;
      gap: 24px;

      .shopping-btn{
        position: relative;
        .shopping-counter{
          background-color: $white-color;
          color: $orange-color;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          text-align: center;
          line-height: 15px;
          font-size: 0.5rem;
          letter-spacing: 0;

          position: absolute;
          top: -2px;
          left: -5px;
        }
      }
    }
  }

</style>