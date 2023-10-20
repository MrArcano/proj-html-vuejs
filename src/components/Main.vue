<script>
import SplitImg from './partials/SplitImg.vue'
import People from './partials/People.vue'



export default {
  name: "Main",
  components:{
    SplitImg,
    People
  }
}
</script>

<template>
  <main>
    <div>
      <h1>Events</h1>
    </div>
    <div>
      <h1>Post</h1>
    </div>
    <div>
      <h1>Pizza Special</h1>
    </div>
    <div>
      <SplitImg />
    </div>
    <div>
      <People />
    </div>
    <div>
      <h1>Brands</h1>
    </div>
    <div>
      <h1>Pizza Menu</h1>
    </div>
    <div>
      <h1>Pizza Deals</h1>
    </div>
    <div>
      <h1>Book table</h1>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../scss/partials/var" as *;
  main{
    border: 2px solid black;
    min-height: 1000px; /* debug */
    & > div{
      margin: 8px 0;
      border: 2px solid black;
    }
  }
</style>