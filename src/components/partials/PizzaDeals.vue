<script>
export default {
  name: "PizzaDeals",
}
</script>

<template>
  <div class="pizza-deals d-flex">
      <div class="w-50 bg-star">
        MADE WITH LOVE
        DELISH PIZZA DEALS
      </div>
      <div class="w-50 h-100">
        <img src="/img/h3-img-5a.jpg" alt="">
      </div>
  </div>
</template>

<style lang="scss" scoped>
  .pizza-deals{
    height: 800px;
    .bg-star{
      background-position: -15%;
      height: 87%;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
    }
  }
</style>