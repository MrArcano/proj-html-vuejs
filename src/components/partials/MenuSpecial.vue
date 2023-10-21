<script>
export default {
  name: "MenuSpecial"
}
</script>

<template>
  <div class="d-flex">
    <div class="left">
      <img src="/img/h1-img-4.jpg" alt="">
      <img class="hover" src="/img/h1-img-7n.png" alt="">
    </div>
    <div class="right">
      <div class="special">
        <h1>SPECIALS*</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quae.</p>

        <div>
          <span>$10</span>
          <div>
            <h1>COMBO PICCOLO</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, maxime.</p>
          </div>
        </div>

        <div>
          <span>$10</span>
          <div>
            <h1>COMBO PICCOLO</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, maxime.</p>
          </div>
        </div>

        <div>
          <span>$10</span>
          <div>
            <h1>COMBO PICCOLO</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, maxime.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .left,
  .right{
    width: 50%;
    position: relative;
  }

  .hover,
  .special{
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }


</style>