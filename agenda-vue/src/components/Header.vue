<template>
  <div id="header">
        <img src="../assets/logo.png" alt="Agenda">
        <h1>Agenda</h1>
  </div>
</template>

<script>
export default {
    name: "Header"
};
</script>

<style scoped>
#header{
    background-image: linear-gradient(to right, var(--cor-decorativa), var(--cor-padrao));
    color: white;
    padding: 10px 10px 10px 10px;
    display: flex;
}
img{
    width: 90px;
    height: 90px;
    margin: 5px 20px 5px 10px;
    vertical-align: auto;
}

h1{
    font-family: "decorativa";
    font-size: 300%;
}
</style>