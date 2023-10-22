<script>
import SplitImg from './partials/main/SplitImg.vue';
import Team from './partials/main/Team.vue';
import PastEvent from './partials/main/PastEvent.vue';
import Posts from './partials/main/Posts.vue';
import MenuSpecial from './partials/main/MenuSpecial.vue';
import Brands from './partials/main/Brands.vue';
import PizzaList from './partials/main/PizzaList.vue';
import PizzaDeals from './partials/main/PizzaDeals.vue';
import BookTable from './partials/main/BookTable.vue';

export default {
  name: "Main",
  components:{
    SplitImg,
    Team,
    PastEvent,
    Posts,
    MenuSpecial,
    Brands,
    PizzaList,
    PizzaDeals,
    BookTable
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
      <PizzaDeals />
    </div>
    <div>
      <BookTable />
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