<script>
import SplitImg from './partials/SplitImg.vue';
import Team from './partials/Team.vue';
import PastEvent from './partials/PastEvent.vue';
import Posts from './partials/Posts.vue';
import MenuSpecial from './partials/MenuSpecial.vue';
import Brands from './partials/Brands.vue';
import PizzaList from './partials/PizzaList.vue';

export default {
  name: "Main",
  components:{
    SplitImg,
    Team,
    PastEvent,
    Posts,
    MenuSpecial,
    Brands,
    PizzaList
  }
}
</script>

<template>
  <main>
    <div>
      <PastEvent />
    </div>
    <div>
      <Posts />
    </div>
    <div>
      <MenuSpecial />
    </div>
    <div>
      <SplitImg />
    </div>
    <div>
      <Team />
    </div>
    <div>
      <Brands />
    </div>
    <div>
      <PizzaList />
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