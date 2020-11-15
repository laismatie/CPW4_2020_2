const moduloLancamentos = {
    state: {
        lancamentos: [
        {
            id: Math.random().toString(36).substr(2, 5),
            valor: -50,
            descricao: "Compras no mercado",
            data: "2020-09-10"
        },
        {
            id: Math.random().toString(36).substr(2, 5),
            valor: 100,
            descricao: "Venda de HQ",
            data: "2020-09-30"
        },
        {
            id: Math.random().toString(36).substr(2, 5),
            valor: -25,
            descricao: "Farmácia",
            data: "2020-10-11"
        },
        ],
        caixa: 0,
    },
    getters: {
        todosLancamentos: state => state.lancamentos,
        dinheiroEmCaixa: state => state.caixa
    },
    actions: {
        salvarLancamento: ({ commit }, lancamento) => {
            commit("adicionarLancamento",lancamento);
            commit("calcularCaixa")
        },
        atualizarCaixa: ({commit}) => commit('calcularCaixa'),
        excluirLancamento: ({commit}, id) =>{
            commit('removerLancamento', id),
            commit("calcularCaixa") 
        }
    },
    mutations: {
        adicionarLancamento: (state, lancamento) => state.lancamentos.unshift(lancamento),
        calcularCaixa: state =>  {
            const caixa = 
                state.lancamentos.length > 0 
                ? state.lancamentos
                    .map(lancamento => lancamento.valor) 
                    .reduce((soma, valor) => soma + valor)
                :0;
            state.caixa = caixa;    
        },
        removerLancamento: 
            (state, id) => 
                state.lancamentos = 
                    state.lancamentos.filter(lancamento => lancamento.id !== id)
    }
};

export default moduloLancamentos;