<script>
export default {
  name: "Main"
}
</script>

<template>
  <main>
    <div class="image"></div>
    <div id="icons">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
  </main>
</template>

<style lang="scss">
  main{
    border: 2px solid black;
    min-height: 1000px; /* debug */
  }

  .image{
    background-image: url("/img/h3-background-img.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 550px;
  }

  #icons{
    width: 100%;
    height: 550px;
    background-color: lightblue;
  }

  #icons > div{
      display: inline-block;
      background-image: url("/img/h3-background-img.jpg");
      font-size: 3rem;
      border: 1px solid black;
  }

  #icons > div:nth-child(1),
  #icons > div:nth-child(3),
  #icons > div:nth-child(7),
  #icons > div:nth-child(9){
    width: 100px;
    height: 100px;
  }

  #icons > div:nth-child(2),
  #icons > div:nth-child(8){
    width: calc(100% - 200px);
    height: 100px;
  }

  #icons > div:nth-child(4),
  #icons > div:nth-child(6){
    width: 100px;
    height: calc(100% - 200px);
  }

  #icons > div:nth-child(1){
    background-position: bottom right;
  }
  #icons > div:nth-child(2){
    background-position: bottom center ;
  }
  #icons > div:nth-child(3){
    background-position: bottom left;
  }
  #icons > div:nth-child(4){
    background-position: center right;
  }
  #icons > div:nth-child(5){
    width: calc(100% - 200px);
    height: calc(100% - 200px);
    background-position: top;
  }
  #icons > div:nth-child(6){
    background-position: center left;
  }
  #icons > div:nth-child(7){
    background-position: top right;
  }
  #icons > div:nth-child(8){
    background-position: top center;
  }
  #icons > div:nth-child(9){
    background-position: top left;
  }


</style>