<template>
  <div id="app">
    <v-alert v-show="showAlert"></v-alert>
    <router-view></router-view>
  </div>
</template>

<script>
import alert from '../src/component/Alert.vue';

import {mapGetters,mapActions} from 'vuex'
export default {
  components: {
		'v-alert': alert
	},
  data () {
    return {

      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.

    }
  },
  computed: mapGetters([
          'showAlert'
      ])
}
</script>

<style>
  @import 'assets/css/reset.css';
</style>
