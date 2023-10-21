<script>
import { store } from '../../data/store'

export default {
  name: "Brands",
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="bg">
    <div class="box-image">
      <img v-for="(el,index) in store.brands" :key="'brand_'+index" :src="'/img/'+el.href" :alt="el.href">
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use "../../scss/partials/var" as *;
.bg{
  background-color: $bg-brands;
  .box-image{
    width: 70%;
    margin: 0 auto;
    padding: 50px 0;
    img{
      width: calc(100% / 5)
    }
  }
}
</style>