import { createStore } from 'vuex';
import moduloLancamentos from './modules/lancamentos';

const store = createStore({
    modules:{
        moduloLancamentos
    }
});

export default store;