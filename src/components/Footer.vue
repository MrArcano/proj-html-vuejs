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
  <footer class="d-flex bg-star">

    <div class="footer-text d-flex justify-content-between w-50">
      <div class="left">
        <div class="top">
          <h6>FIND OUR RESTAURANTS</h6> 
          <p>
            <span>1614 E. Bell Rd #104.</span> <br>
            <span>Salerno, AZ 85022</span> <br>
            <span>(602) 867-1010</span> <br>
          </p> 
          <p>
            <span>204 E. Pizzetta Tommaso</span> <br>
            <span>Sorrento, AZ 85022</span> <br>
            <span>(358) 867-1010</span> <br>
          </p>
          <p>
            <span>Vale Puglia 54</span> <br>
            <span>Torre Del Greco AZ 85022</span> <br>
            <span>(359) 867-1010</span> <br>
          </p>
          <p>
            <span>Corso Itali AA</span> <br>
            <span>Naples, AZ 85022</span> <br>
            <span>(989) 867-1010</span> <br>
          </p>
        </div>
        <div class="bottom">
          <p class="d-flex gap-1 gold-text"><span>Created with <Heart /> by </span><span class="green-cyan-text">Qode Interactive</span></p>
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

        <p><strong>FOLLOW US: </strong><span>[icone]</span></p>
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
  height: 600px;
  overflow: hidden;

  color: $p-color;
  letter-spacing: 1px;

  .footer-text{
    padding: 90px 50px 50px;

    span{
      font-family: 'Noto Sans', sans-serif;
    }

    h6, strong,
    .gold-text{
      color: $important-color;
    }

    .dark-orange-text{
      color: $dark-secondary-color;
    }

    .green-cyan-text{
      color: $quote-color;
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
      .bottom{
        white-space: nowrap;
        p{
          span{
            display: flex;
            gap: 4px;
          }
        }
      }
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