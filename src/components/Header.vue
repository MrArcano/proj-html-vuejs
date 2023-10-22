<script>
import Menu from './partials/header/Menu.vue';
import Hero from './partials/header/Hero.vue';

export default {
  name: "Header",
  components:{
    Menu,
    Hero
  }
}
</script>

<template>
  <header class="bg-star">
    <Menu />
    <Hero />
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/var" as *;

  header{
    
    color: $primary-color;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 2px;
    padding: 16px 0;
    overflow-x: hidden;
  }
</style>