<template>
  <div id="agenda" >  
      <div id="agendaCaixa" v-if="todosContatos != 0">
        <span>Meus contatos</span>
        <BlocoContato
          v-for="contatos in todosContatos"
          v-bind:key="contatos.id"
          :contato="contatos"
        />
      </div>
      <div id="mensagem" v-else>Não há contatos salvos.</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import BlocoContato from './BlocoContato.vue';
export default {
  name: "Agenda",
  data:() =>{
    return {
      
    };
  },
  computed: mapGetters(["todosContatos"]),
  components:{
      BlocoContato
  },
  props:{
    contatos: Object
  }
  
}
</script>

<style scoped>
#agenda{
    font-family: "decorativa";
    font-size: 1.4em;
    width: 50%;
    margin: 5px;
    padding: 10px;
}
#agendaCaixa{
    padding: 3px;
    color: white;
    font-size: 1.1em;
    background-color: var(--cor-decorativa);
    border-radius: 20px;
    margin: 5px auto 0px auto;
}
span{
  margin-left: 10px;
}
@media (max-width: 600px){
  #agenda{
    width: 90vw;
  }
}

</style>