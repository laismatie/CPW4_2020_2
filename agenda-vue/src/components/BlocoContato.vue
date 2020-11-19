<template>
  <div id="blocoContato">
     
      <div id="dadosContatos">
          <span >{{contato.nome}}</span>
          <span >{{contato.telefone}}</span>
          <span >{{contato.email}}</span>
      </div>
       <button @click="excluirContato(contato.id)" id="botaoExcluir" >
          <img src="../assets/trash.png" alt="Lixeira">
      </button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "BlocoContato",
    methods: mapActions(["excluirContato"]),
    props:{
        contato: Object
    }
}
</script>

<style scoped>
#blocoContato{
    display: flex;
    width: 80%;
    margin: auto;
    background-color: white;
    border-radius: 15px;
    font-family: "padrao";
    padding: 10px;
    justify-content: center;
    color: black;
    margin-bottom: 10px;
}
button{
    border: none;
    outline: none;
    background-color: white;
    vertical-align: middle;
    align-items: flex-end;
}
button:hover {
  cursor: pointer;
}
button img {
  width: 30px;
}

#dadosContatos{
    width: 70%;
    font-size: 70%;
    text-align: right;
}
span{
    display: block;
}
span:first-child{
    font-size: 113%;
    font-family: "destaque";
}

</style>