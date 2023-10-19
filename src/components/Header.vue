<script>
export default {
  name: "Header"
}
</script>

<template>
  <header>
    <!-- Menu -->
    <div class="menu">
      <div class="left">
        <span class="btn-orange">ORDER ONLINE</span>
      </div>
      <nav class="center">
        <ul>
          <li>Home</li>
          <li>Pages</li>
          <li>Menu</li>
          <li><img src="/img/h5-logo-divided-header.png" alt=""></li>
          <li>Event</li>
          <li>Blog</li>
          <li>Landing</li>
        </ul>
      </nav>
      <div class="right">
        <span>Cart</span>
        <span>Search</span>
      </div>
    </div>

    <!-- Slider -->
    <h1>Slider</h1>
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/var" as *;

  header{
    background-color: $header-bg-color;
    color: $header-text-color;

    .menu{
      padding: 8px;
      width: 90%;
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid white;
      >.left{
        width: 15%;
        .btn-orange{
          background-color: $btn-default;
          white-space: nowrap;
          padding: 8px 16px;
        }
      }
      >.center{
        display: flex;
        align-items: center;
        ul{
          list-style: none;
          display: flex;
          align-items: center;
          gap: 32px;
          margin: 0;
        }
        img{
          width: 140px;
          min-width: 140px;
        }
      }
      >.right{
        width: 15%;
        display: flex;
        justify-content: flex-end;
        gap: 24px;
      }
    }
  }
</style>