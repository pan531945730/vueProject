<template>
  <div id="app">
    <v-alert v-show="showAlert"></v-alert>
    <v-toast v-show="showToast"></v-toast>
    <v-loading v-show="loading"></v-loading>
    <router-view></router-view>
  </div>
</template>

<script>
import alert from '../src/component/Alert.vue';
import toast from '../src/component/toast.vue';
import loading from '../src/component/loading.vue';

import {mapGetters,mapActions} from 'vuex'
export default {
  components: {
		'v-alert': alert,
    'v-toast' : toast,
    'v-loading' : loading
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
          'showAlert',
          'showToast',
          'loading'
      ])
}
</script>

<style>
  @import 'assets/css/reset.css';
</style>
