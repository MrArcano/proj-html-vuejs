<script>
import Mustache from './svg_vue/Mustache.vue';
import Scooter from './svg_vue/Scooter.vue';
import Magnifying from './svg_vue/Magnifying.vue';

  export default {
  name: "Menu",
  components:{
    Mustache,
    Scooter,
    Magnifying
  }
}
</script>

<template>
  <div class="menu">
    <div class="left">
      <span class="btn-orange">ORDER ONLINE</span>
    </div>
    <nav class="center">
      <ul>
        <li class="d-flex align-items-center"><div class="icon-white"><Mustache /></div>Home</li>
        <li>Pages</li>
        <li>Menu</li>
        <li><img src="/img/h5-logo-divided-header.png" alt=""></li>
        <li>Event</li>
        <li>Blog</li>
        <li>Landing</li>
      </ul>
    </nav>
    <div class="right">
      <div class="shopping-btn d-flex align-items-center">

        <div class="icon-white">
          <Scooter />
        </div>
        <span>Cart</span>
        <span class="shopping-counter">5</span>
      </div>
      <div class="d-flex align-items-center"><div class="icon-white"><Magnifying /></div><span>Search</span></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/var" as *;
  .menu{
    padding: 8px;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid white; /* debug */
    >.left{
      width: 15%;
      .btn-orange{
        background-color: $btn-default;
        white-space: nowrap;
        padding: 12px 28px;
      }
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
          background-color: $header-text-color;
          color: $btn-default;
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