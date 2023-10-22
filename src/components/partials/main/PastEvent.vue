<script>
import { store } from '../../../data/store';

export default {
  name: "PastEvent",
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="d-flex gap-2">
    <div class="card-csm" v-for="(el,index) in store.pastEvent" :key="'pastEvent_'+index">
      <img :src="'/img/'+el.img" alt="">
      <div class="bg-dot">
        <span><i class="fa-regular fa-eye"></i></span>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/var" as *;
  .card-csm{
    width: calc(100% / 4);
    position: relative;
    cursor: pointer;

    &:hover .bg-dot{
      opacity: 1;
    }
    .bg-dot{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      opacity: 0;
      transition: opacity 0.5s;
      span{
        width: 80px;
        height: 80px;
        background-color: $secondary-color;
        border-radius: 50%;
        text-align: center;
        line-height: 80px;
        color: $primary-color;
        font-size: 32px;
      }
    }
  }
</style>