<script>
export default {
  name: "BookTable"
}
</script>

<template>
  <div class="book-table">
    <form class=" form">
      
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="1 Person">
        <span class="input-group-text"><i class="fa-solid fa-user-group"></i></span>
      </div>
      
      <span>FOR</span>
    
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="11/29/2020">
        <span class="input-group-text"><i class="fa-regular fa-calendar"></i></span>
      </div>
    
      <span>AT</span>
    
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="7:00 pm">
        <span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
      </div>
      
      <div>
        <button type="submit" class="btn-orange mb-3">Book a table</button>
      </div>

    </form>
  </div>
</template>

<style lang="scss" scoped>

@use "../../../scss/partials/var" as *;
  .book-table{
    background-image: url("/img/h3-background-img-3.jpg");
    background-size: cover;
    background-position-y: center;
    height: 250px;
    .form{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;

      & > span{
        color: $primary-color;
      }

      .input-group{
        width: 210px;
        height: 55px;
        margin: 16px 0;
        border: 2px solid black;
        
        .form-control{
          border-radius: 0;
          border: none;
          &::placeholder{
            color: $p-color;
            font-size: 0.8rem;
            letter-spacing: 1px;
          }
        }
        .input-group-text{
          border-radius: 0;
          color: $important-color;
          background-color: $primary-color;
        }
      }
      .btn-orange{
        margin: 16px 0 16px 32px;
        width: 210px;
        height: 55px;
      }
    }
  }
</style>