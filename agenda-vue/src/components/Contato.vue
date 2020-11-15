<template>
  <div id="painelContato">
    <div id="formularioContato">
      <form >
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">
        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" name="telefone">
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email">
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#painelContato{
  font-family: "destaque";
  font-size: 115%;
  width: 40%;
  margin: 5px 10px 5px 5px;
  padding: 10px;
}
#formularioContato{
  margin-left: 40px;
  font-size: 115%;
  font-family: "padrao";
}
#nome, #email, #telefone, button{
  display: block;
  margin-bottom: 5px;
}

#nome, #telefone,#email{
    margin-top: 5px;
    height: 20px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    width: 250px;
}
</style>