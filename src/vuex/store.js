import Vue from 'vue'
import Vuex from 'vuex'

import com from './modules/com';
import user from './modules/user';

Vue.use(Vuex)

const store = new Vuex.Store({
   modules: {
     com:com,
     user:user
   }
})

export default store
