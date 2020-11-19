<template>
  <div id="container">
      <div id="dadosInstituto">Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul
          <p>Campus Aquidauana</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#container{
   background-color: var(--cor-destaque);
    color: white;
    padding: 20px;
    font-family: "padrao";
    display: flex;
    align-items: flex-end;
    flex-direction: column;
}
#dadosInstituto{
    text-align: center;
}
#dadosInstituto p{
    float: right;
}

</style>