<template>
  <div>
    <Header/>
    <div id="container">
      <PainelContato/>
      <Agenda/>
    </div>
    <Rodape/>
  </div>
</template>

<script>
import Rodape from './components/Rodape.vue'
import Agenda from './components/Agenda.vue'
import PainelContato from './components/PainelContato.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    PainelContato, Header, Agenda, Rodape
  }
}
</script>

<style>
@font-face {
  font-family: "padrao";
  src: url(./fonts/NewsCycle-Regular.ttf);
}
@font-face {
  font-family: "destaque";
  src: url(./fonts/NewsCycle-Bold.ttf);
}
@font-face {
  font-family: "decorativa";
  src: url(./fonts/BadScript-Regular.ttf);
}

:root {
  --cor-padrao: #a8dadc;
  --cor-decorativa: #457b9d;
  --cor-destaque: #1d3557;
  --cor-fundo: #e3f5f8;
}
body {
  margin: 0;
  background-color: var(--cor-fundo);
}
#container{
  display: flex;
  width: 100vw;
  justify-content: space-between;
  margin: auto;
}

@media (max-width: 600px){
  #container{
    display: block;
    padding: auto;
    margin: auto;
  }
  
}
</style>
