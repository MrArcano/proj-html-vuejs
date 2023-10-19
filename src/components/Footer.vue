<script>
import Heart from './partials/svg_vue/Heart.vue'

export default {
  name: "Footer",
  components:{
    Heart
  }
}
</script>

<template>
  <footer class="d-flex">

    <div class="footer-text d-flex justify-content-between w-50">
      <div class="left">
        <div class="top">
          <h6>FIND OUR RESTAURANTS</h6> 
          <p>
            1614 E. Bell Rd # 104. <br>
            Salerno, AZ 85022 <br>
            (602) 867-1010 <br>
          </p> 
          <p>
            204 E. Pizzetta Tommaso <br>
            Sorrento, AZ 85022 <br>
            (358) 867-1010 <br>
          </p>
          <p>
            Vale Puglia 54 <br>
            Torre Del Greco AZ 85022 <br>
            (359) 867-1010 <br>
          </p>
          <p>
            Corso Itali AA <br>
            Naples, AZ 85022 <br>
            (989) 867-1010 <br>
          </p>
        </div>
        <div class="bottom">
          <p class="d-flex gap-1 gold-text">Created with <Heart /> <span class="green-cyan-text">by Qode Interactive</span></p>
        </div>
      </div>

      <div class="center">
        <h6>WORKING HOURS</h6> 
        <p>
          <strong>MONDAY</strong> <br>
          <span class="dark-orange-text">Kitchen Closed</span> 
        </p>
        <p>
          <strong>TUSEDAY UNTIL FRIDAY</strong> <br>
          <span>9:00 - 22:00</span>
        </p>
        <p>
          <strong>SATURDAY <span class="dark-orange-text">*</span></strong><br>
          <span>Saturday 11am to midnight</span>
        </p>
        <p>
          <strong>SUNDAY</strong> <br>
          <span>9:00 - 22:00</span>
        </p>

        <p><strong>FOLLOW US:</strong><span>[icone]</span></p>
      </div>

      <div class="right">
        <h5>
          THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC,
          WELL BAKED SLICE OF PIZZA.
        </h5>
        <img class="stamp" src="/img/footer-bottom-img.png" alt="">
      </div>


      

    </div>
    <div class="w-50 footer-img">
    </div>
  </footer>
</template>

<style lang="scss">
@use "../scss/partials/var" as *;

footer{
  background-image: url("/img/cielostellato.PNG");
  background-size: cover;
  height: 600px;
  overflow: hidden;

  color: $light-grey-color;
  letter-spacing: 1px;

  .footer-text{
    padding: 90px 50px 50px;



    h5{
      color: $white-color;
    }

    h6, strong,
    .gold-text{
      color: $gold-color;
    }

    .dark-orange-text{
      color: $dark-orange-color;
    }

    .green-cyan-text{
      color: $green-cyan-color;
    }

    p{
      font-size: 0.8rem;
    }


    .left,
    .center,
    .right{
      width: calc(100% / 3);
    }
    .left{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .right{
      padding: 0 40px;
      position: relative;

      .stamp{
      position: absolute;
      bottom: 0;
      right: 0;
    }
    }
  }

  .footer-img{
    background-image: url("/img/footer-img-1.jpg");
    height: 100%;
  }
}

</style>