<template>
  <div class="pd-container">
    <product-nav v-bind:class="{'isSift':isNowPage}"></product-nav>
    <product-list></product-list>
    <foot-bar></foot-bar>
  </div>
</template>
<style>

</style>
<script>
  import productNav from '../../component/productNav.vue';
  import productList from '../../component/productList.vue';
  import footBar from '../../component/footBar.vue';
  export default{
    components: {
      productNav,
      productList,
      footBar
    },
    data(){
      return{
        isNowPage: true
      }
    }
  }
</script>
<style>
  body{
      background-color: #f2f2f2;
  }
</style>
