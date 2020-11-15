<template>
  <div>
    <Marca />
    <Header />

    <div id="container">
      <PainelLancamentos />
      <PainelResumo />
    </div>
  </div>
</template>

<script>
import PainelResumo from "./components/PainelResumo.vue";
import PainelLancamentos from "./components/PainelLancamentos.vue";
import Header from "./components/Header.vue";
import Marca from "./components/Marca.vue";
export default {
  name: "App",
  components: { Marca, Header, PainelLancamentos, PainelResumo },
};
</script>

<style>
@font-face {
  font-family: "padrao";
  src: url(./fonts/KumbhSans-Regular.ttf);
}

@font-face {
  font-family: "negrito";
  src: url(./fonts/KumbhSans-Bold.ttf);
}

:root {
  --cor-destaque: #5333ed;
}

body {
  margin: 0;
  background-color: #dddddd;
}

#container {
  display: flex;
  padding: 20px;
}

.entrada {
  color: #22a7f0;
}

.gasto {
  color: red;
}
</style>