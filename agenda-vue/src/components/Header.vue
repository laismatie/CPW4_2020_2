<template>
  <div id="header">
        <img src="../assets/logo.png" alt="Agenda">
        <h1>
            <p>Minha</p>
            <span>AGENDA</span>
        </h1>
  </div>
</template>

<script>
export default {
    name: "Header"
};
</script>

<style scoped>
#header{
    background-color: var(--cor-destaque);
    color: white;
    padding: 3px;
    display: flex;
    width: 100vw;
    
}
img{
    width: 50px;
    height: 50px;
    margin: 10px;   
}
h1{
    margin: 0px;
    align-items: center;
    padding: 0px;
    margin-block-start: 0;
    margin-block-end: 0;
    display: inline-flex;
}
h1 p{
    font-family: "decorativa";
    font-size: 0.7em;
    margin: 0px 5px 0px 0px;
    padding: 0px;
    font-weight: lighter;
}
h1 span{
    font-family: "padrao";
    font-size: 0.7em;
    margin: 0px;
    padding: 0px;
}
</style>