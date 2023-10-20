<script>
export default {
  name:"People"
}
</script>

<template>
  <div class="d-flex">
    <div>
      <img src="/img/h1-team-1a-700x700.jpg" alt="">
      <div class="bg-dot">
        <div>
          <h4>FRANK BAILEY</h4>
          <span>Kitchen Porter</span>
          <span>icon</span>
        </div>
      </div>
    </div>
    <div>
      <img src="/img/h1-team-2a.jpg" alt="">
    </div>
    <div>
      <img src="/img/h1-team-4a.jpg" alt="">
    </div>
    <div>
      <img src="/img/h1-team-3a.jpg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/var" as *;
  .d-flex > div{
    width: calc(100% / 4);
    aspect-ratio: 1/1;

    &:hover > div{
      opacity: 1;
    }

    position: relative;
    & > div{
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;

      padding: 24px;
      
      opacity: 0;
      transition: opacity 0.5s;
      & > div{
        height: 100%;
        background-color: $orange-color;
        color: $white-color;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }

</style>