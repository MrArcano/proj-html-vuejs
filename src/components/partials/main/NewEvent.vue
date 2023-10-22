<script>
export default {
  name: "NewEvent",
  props:{
    data: Object,
  }
}
</script>

<template>

  <div class="events d-flex">
    <div class="left">
      <h1>{{ data.day }}</h1>
      <h5>{{ data.month }}</h5>
    </div>
    <div class="right ms-5">
      <h5 class="text-uppercase">{{ data.text }}</h5>
      <span class="text-06"><i class="fa-solid fa-location-dot me-1"></i>{{ data.locality }}</span>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use "../../../scss/partials/var" as *;



  .events{
    padding: 24px 0;
    .left{
      text-align: center;
      h1{
        color: $orange-color;
        margin: 0;
      }
    }

    .right{
      h5{
        margin: 0;
      }
    }

  }
  .events:not(:last-child){
    border-bottom: 1px dotted $gold-color;
  }

</style>