import Vue from 'vue'
import Vuex from 'vuex'

import com from './modules/com';

Vue.use(Vuex)

const store = new Vuex.Store({
   modules: {
     com:com
   }
})

export default store
