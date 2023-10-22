<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import GoToTop from './components/partials/svg_vue/GoToTop.vue';

export default {
  name: "App",
  components:{
    Header,
    Main,
    Footer,
    GoToTop
  },
  data() {
    return {
      scrollTop: 0,
      viewGoToBack:false,
    }
  },
  methods: {
    topFunction() {
      document.documentElement.scrollTop = 0;
    },
    handleScroll(event) {
      this.scrollTop = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<template>

  <Header />
  <Main />
  <Footer />
  <GoToTop v-if="scrollTop >= 555" @click="topFunction()" id="myBtn" />

</template>

<style lang="scss">
  @use "./scss/main.scss";

  #myBtn {
    position: fixed; 
    bottom: 20px; 
    right: 20px; 
    z-index: 99;
  }
</style>