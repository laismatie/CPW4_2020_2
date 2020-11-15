<template>
  <div>
    <canvas id="grafico"></canvas>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Chart from "chart.js";

export default {
  name: "GraficoComportamento",
  computed: mapGetters(["todosLancamentos"]),
  methods: {
    renderizarGrafico() {
      let lancamentos = [...this.todosLancamentos];
      lancamentos.sort((a, b) => new Date(a.data) - new Date(b.data));

      let valorEmCaixa = 0;
      let datas = [];
      let valores = [];

      lancamentos.forEach((lancamento) => {
        const dataFormatada = new Date(lancamento.data).toLocaleDateString(
          "pt-BR",
          {
            timeZone: "UTC",
          }
        );
        datas.push(dataFormatada);
        valorEmCaixa += lancamento.valor;
        valores.push(valorEmCaixa);
      });

      const corCurva = valorEmCaixa > 0 ? "blue" : "red";
      const config = {
        type: "line",
        data: {
          labels: datas,
          datasets: [
            {
              label: "Comportamento do seu dinheiro",
              borderColor: corCurva,
              backgroundColor: corCurva,
              data: valores,
              fill: false,
            },
          ],
        },
        options: this.opcoesGrafico,
      };

      const contexto = document.getElementById("grafico").getContext("2d");
      new Chart(contexto, config);
    },
  },
  data: () => {
    return {
      opcoesGrafico: {
        responsive: true,
        title: {
          display: true,
          text: "Dinheiro em caixa",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Dias",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Renda",
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.renderizarGrafico();
  },
  created() {
    // eslint-disable-next-line no-unused-vars
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "calcularCaixa") {
        this.renderizarGrafico();
      }
    });
  },
};
</script>

<style>
</style>    