const moduloContatos = {
    state: {
        contatos: [
        {
            id: Math.random().toString(36).substr(2, 5),
            nome: "Laís Matie Hara",
            telefone: "(67) 99999-9999",
            email: "lais@email.com"
        },
        {
            id: Math.random().toString(36).substr(2, 5),
            nome: "Geovanna Chaves",
            telefone: "(67) 98888-9999",
            email: "geovanna@email.com"
        },
        {
            id: Math.random().toString(36).substr(2, 5),
            nome: "Sidney Sousa",
            telefone: "(67) 98767-7676",
            email: "sidney@email.com"
        }
        ],
    },
    getters: {
        todosContatos: state => state.contatos,
    },
    actions: {
        salvarContato: ({ commit }, contato) => {
            commit("adicionarContato",contato);
        },
        excluirContato: ({commit}, id) =>{
            commit("removerContato", id);
        }
    },
    mutations: {
        adicionarContato: (state, contato) => state.contatos.unshift(contato),
        removerContato: 
            (state, id) => 
                state.contatos = 
                    state.contatos.filter(contato => contato.id !== id),
        renderizarInicial: (state, contato) => state.contatos.nomsplice(contato.nome)
    }
};

export default moduloContatos;