<template>
  <div id="painelContato">
    <div id="formularioContato">
      <form @submit="salvar">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">
        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" name="telefone" >
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email">

        <button>Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Contato from "../models/Contatos";

export default {
  name: "PainelContato",
  data:() =>{
    return {
      nome: "",
      telefone: "",
      email: "",
    }; 
  },
  methods:{
    ...mapActions(["salvarContato"]),
    salvar(event){
      event.preventDefault();
      const contato = new Contato(this.nome, this.telefone, this.email);
        this.salvarContato(contato);
        this.limparFormulario();
      },
      limparFormulario(){
        this.nome = "";
        this.telefone = "";
        this.email = "";
      }
  }
}
</script>

<style scoped>
#painelContato{
  font-family: "destaque";
  font-size: 115%;
  width: 25%;
  margin: 5px auto 5px auto;
  padding: 10px;
}
#formularioContato{
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 20px 40px 80px 20px;
  font-family: "padrao";
}
#nome, #email, #telefone, button{
  display: block;
  margin-bottom: 5px;
}
label{
  font-family: "destaque";
}
#nome, #telefone,#email{
    margin-top: 5px;
    height: 20px;
    padding: 5px;
    font-size: 90%;
    border-radius: 8px;
    border-color: var(--cor-padrao);
    width: 280px;

}

input:focus{
  box-shadow: 0 0 0 0;
  outline: 0;
}

button {
  background-color: var(--cor-decorativa);
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 5px 8px;
  color: white;
  font-family: "destaque";
  font-size: 105%;
  width: 6em;
  margin-top: 15px;
  float: right;
}
button:hover{
  cursor: pointer;
  background-color: var(--cor-destaque);
  transition: 0.7s;
}
</style>