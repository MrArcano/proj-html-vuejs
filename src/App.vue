<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components:{
    Header,
    Main,
    Footer
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
  <button v-if="scrollTop >= 555" @click="topFunction()" id="myBtn">TOP</button>

</template>

<style lang="scss">
  @use "./scss/main.scss";

  #myBtn {
    display: block; /* Hidden by default */
    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 20px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    background-color: red; /* Set a background color */
    color: white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
    border-radius: 10px; /* Rounded corners */
    font-size: 18px; /* Increase font size */
  }

  #myBtn:hover {
    background-color: #555; /* Add a dark-grey background on hover */
  }
</style>