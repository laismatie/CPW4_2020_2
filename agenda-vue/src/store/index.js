import { createStore } from 'vuex';
import moduloContatos from './modules/contatos';

const store = createStore({
    modules:{
        moduloContatos
    }
});

export default store;