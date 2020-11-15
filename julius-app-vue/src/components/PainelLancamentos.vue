<template>
  <div id="painelLancamento">
      <div id="formularioLancamento">
        <form @submit="salvar">
            <div id="tiposLancamento">
                <input type="radio" name="tipo" id="entrada" value="entrada" v-model="tipo">
                <label for="entrada">Entrada</label>
                <input type="radio" name="tipo" id="saida" value="saida" v-model="tipo">
                <label for="saida">Saída</label>
            </div>
            <label for="valor">Valor</label>
            <input type="number" min="0" step="0.01" name="valor" id="valor" required v-model.number="valor">
            <label for="descricao">Descrição</label>
            <input type="text" name="descricao" id="descricao" required v-model="descricao">
            <label for="data">Data</label>
            <input type="date" name="data" id="data" required v-model="data">
            
            <button>Lançar</button>
        </form>
      </div>

      <div id="areaLancamentos">
        <BlocoLancamento 
          v-for="lancamento in todosLancamentos"
          v-bind:key="lancamento.id"
          :tipo="lancamento.valor > 0 ? 'entrada' : 'saida'" 
          :lancamento="lancamento"
        />
      </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import BlocoLancamento from './BlocoLancamento.vue';
import Lancamento from '../models/Lancamento';

export default {
    name: "PainelLancamento",
    data: () =>{
      return{
        tipo: "saida",
        valor: undefined,
        descricao: "",
        data: "",
      };
    },
    components:{
      BlocoLancamento
    },
    computed: mapGetters(["todosLancamentos"]),
    methods:{
      ...mapActions(["salvarLancamento"]),
      salvar(event){
        event.preventDefault();
        if(this.tipo === "saida"){
          this.valor *= -1;
        }
        const lancamento = new Lancamento(this.valor, this.descricao, this.data);
        this.salvarLancamento(lancamento);
        this.limparFormulario();
      },
      limparFormulario(){
        this.tipo = "saida";
        this.valor = undefined;
        this.descricao = "";
        this.data = "";
      }
    }
}
</script>

<style scoped>
#painelLancamento {
  width: 40%;
  padding: 10px;
}
#formularioLancamento {
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  font-family: "padrao";
}
#valor,
#descricao,
#data, button {
    display: block;
    margin-bottom: 10px;
}
#valor,
#descricao,#data{
    height: 20px;
    font-family: "padrao";
    font-size: 100%;
}
#tiposLancamento {
  margin-bottom: 20px;
  font-family: "negrito";
  font-size: 110%;
}
#tiposLancamento label {
  margin-right: 20px;
}
#tiposLancamento label:first-of-type{
    color: #22a7f0;
}
#tiposLancamento label:last-of-type{
    color: red;
}
#descricao {
  width: 70%;
}
button {
  background-color: var(--cor-destaque);
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  font-family: "negrito";
  font-size: 120%;
}
#areaLancamentos {
  margin-top: 30px;
}
</style>