<template>
  <div>
    <Header/>
    <div id="container">
      <Contato/>
      <Agenda/>
    </div>
  </div>
</template>

<script>
import Agenda from './components/Agenda.vue'
import Contato from './components/Contato.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Contato, Header, Agenda
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
  src: url(./fonts/GreatVibes-Regular.ttf);
}

:root {
  --cor-padrao: #80cbc4;
  --cor-decorativa: #26a69a;
  --cor-destaque: #00695c;
  --cor-fundo: #e0f2f1;
}
body {
  margin: 0;
  background-color: var(--cor-fundo);
}
#container{
  display: flex;
}
</style>
