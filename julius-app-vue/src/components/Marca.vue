<template>
  <div>
      <img src="../img/LogoJulius.png" alt="Julius">
      <span>JULIUS</span>
  </div>
</template>

<script>
export default {
    name:"Marca",
}
</script>

<style scoped>
    div{
        background-color: white;
        font-family: "negrito";
        padding: 10px;
    }
    img{
        width: 40px;
        vertical-align: middle;
        margin-right: 10px;
    }
    span{
        color: var(--cor-destaque);
        font-size: 120%;
    }
</style>
