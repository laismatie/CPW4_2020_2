<template>
  <div id="agenda">  
      <div id="agendaCaixa">
        <span>Meus contatos</span>
        <BlocoContato
          v-for="contato in todosContatos"
          v-bind:key="contato.id"
          :contato="contato"
        />
      </div>
      
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
    contato: Object
  }
  
}
</script>

<style scoped>
#agenda{
    font-family: "decorativa";
    font-size: 1.4em;
    width: 50%;
    margin: 5px auto 5px auto;
    padding: 10px;
}
#agendaCaixa{
    padding: 10px;
    color: white;
    font-size: 1.1em;
    background-color: var(--cor-decorativa);
    border-radius: 20px;
    margin-top: 5px;
}
span{
  margin-left: 10px;
}
</style>