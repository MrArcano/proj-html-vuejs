<script>
export default {
  name: "PizzaCard",
  props:{
    pizza: Object,
  }
}
</script>

<template>
  <div class="card-csm">
    <div class="top">
      <img :src="'/img/'+pizza.img" :alt="pizza.img">
      <div v-if="pizza.isSold" class="badge-csm">SOLD</div>
    </div>
    <div class="bottom">
      <h5>{{ pizza.name }}</h5>
      <h6><span class="old-price">{{ pizza.oldPrice }}</span> <span class="new-price">{{ pizza.newPrice }}</span></h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../../scss/partials/var" as *;

  .card-csm{
    width: 250px;
    margin: 0 auto;
    padding: 48px 0;
    .top{
      position: relative;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .badge-csm{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: $secondary-color;
        color: $primary-color;
        text-align: center;
        line-height: 50px;
        font-size: 0.7rem;
      }
    }
    .bottom{
      text-align: center;
      h5{
        color: $important-color;
        text-transform: uppercase;
      }
      .old-price{
        color: $old-price-color;
        text-decoration: line-through;
      }
      .new-price{
        color: $new-price-color;
      }
    }

  }
</style>