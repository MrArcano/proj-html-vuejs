<script>
export default {
  name: "SplitImg"
}
</script>

<template>
  <div id="icons">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <p class="text">
      GO AHEAD AND <br>
      BUILD YOUR <br>
      OWN PIZZA <br>
      WE WON'T <br>
      JUDGE! <br>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/var" as *;

  #icons{
    width: 100%;
    height: 550px;

    display: flex;
    flex-wrap: wrap;

    position: relative;

    & > .text{
      position: absolute;
      top: 50%;
      left: 20%;
      transform: translateY(-50%);

      color: $primary-color;
      font-size: 80px;
      line-height: 80px;
      font-weight: bold;
    }

    // tutti i div contengono lo stesso bg-image
    & > div{
        background-image: url("/img/h3-background-img.jpg");
    }

    // dimensiono i vari div e cambio il bg-position
    & > div:nth-child(1),
    & > div:nth-child(3),
    & > div:nth-child(7),
    & > div:nth-child(9){
      width: 100px;
      height: 100px;
    }
    & > div:nth-child(2),
    & > div:nth-child(8){
      width: calc(100% - 200px);
      height: 100px;
    }
    & > div:nth-child(4),
    & > div:nth-child(6){
      width: 100px;
      height: calc(100% - 200px);
    }
    & > div:nth-child(1){
      background-position: 100% 100%;
    }
    & > div:nth-child(2){
      background-position: 0 100%;
      background-size: cover;
    }
    & > div:nth-child(3){
      background-position: 0 100%;
    }
    & > div:nth-child(4){
      background-position: 100% 0;
    }
    & > div:nth-child(5){
      width: calc(100% - 200px);
      height: calc(100% - 200px);
      background-position: 0 0;
      background-size: cover;
    }
    & > div:nth-child(6){
      background-position: 0 50%;
    }
    & > div:nth-child(7){
      background-position: 100% 60%;
    }
    & > div:nth-child(8){
      background-position: 0 60%;
      background-size: cover;
    }
    & > div:nth-child(9){
      background-position: 0 60%;
    }
  }


</style>