<script>
export default {
  name: "CarouselItem",
  props:{
    item: Object,
  }
}
</script>

<template>
    <img :src="'/img/'+ item.hrefBack" :alt="item.hrefBack">
    <img class="hover-pizza" :src="'/img/'+ item.hrefFront" :alt="item.hrefFront">
</template>

<style lang="scss" scoped>

  img{
      height: 300px;
    }
  .hover-pizza{
    position: absolute;
    bottom: -50px;
    height: 370px;
  }
</style>