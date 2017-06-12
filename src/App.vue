<template>
  <div id="app" class="pd-container">
    <div class="pd-nav" v-bind:class="{'isIndex':isShow}">
        <router-link to="/siftFinance"><span>精选</span></router-link>
        <router-link to="/steward"><span>94管家</span></router-link>
    </div>
    <router-view></router-view>
    <footBar></footBar>
  </div>
</template>

<script>
import siftFinance from './component/siftFinance.vue'
import steward from './component/steward.vue'
import footBar from './component/footBar.vue'
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      isShow: true
    }
  },
  components: {siftFinance, steward, footBar, firstcomponent, secondcomponent }
}
</script>

<style>
  @import 'assets/css/productList.css'
</style>
