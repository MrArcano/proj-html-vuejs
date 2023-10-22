<script>

export default {
  name:"MemberCard",
  props:{
    member: Object,
  }
}
</script>

<template>
  <div class="card-csm">
    <img :src="'/img/'+ member.img" :alt="member.img">
    <div class="bg-dot">
      <div>
        <h4>{{ member.name }}</h4>
        <span>{{ member.role }}</span>
        <p>
          <a :href="member.link.instagram" class="fa-brands fa-instagram"></a>
          <a :href="member.link.twitter" class="fa-brands fa-twitter"></a>
          <a :href="member.link.facebook" class="fa-brands fa-facebook-f"></a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../../../scss/partials/var" as *;
  .card-csm{
    cursor: pointer;
    width: calc(100% / 4);
    aspect-ratio: 1/1;
    position: relative;

    &:hover > div{
      opacity: 1;
    }

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
        background-color: $secondary-color;
        color: $primary-color;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    a{
      color: $primary-color;
      margin: 0 8px;
    }
  }
</style>