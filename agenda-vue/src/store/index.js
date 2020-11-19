import { createStore } from 'vuex';
import Contatos from './modules/contatos';

const store = createStore({
   modules:{
       Contatos
   }
});

export default store;