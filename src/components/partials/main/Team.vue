<script>
import MemberCard from './MemberCard.vue';

import { store } from '../../../data/store';

export default {
  name:"People",
  components:{
    MemberCard
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="d-flex">
    <MemberCard v-for="(el,index) in store.team" :key="'member_'+index" :member="el" />
  </div>
</template>

<style lang="scss" scoped>

</style>