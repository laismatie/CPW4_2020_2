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
    font-family: "padrao";
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom:0;
    width: 100vw;
    
}
#dadosInstituto{
    margin: 1px 30px;
    padding: 10px;
    text-align: right;
}
#dadosInstituto p{
    margin: 0px;
    text-align: right;
}
@media (max-width: 600px){
    #dadosInstituto{
        text-align: center;    }
    #dadosInstituto p{
        margin-top: 0px;
        text-align: center;
    }
}
</style>