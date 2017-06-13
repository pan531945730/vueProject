<template>
  <div class="pd-container">
    <product-nav v-bind:class="{'isSift':isNowPage}"></product-nav>
    <product-list id="2"></product-list>
    <foot-bar></foot-bar>
  </div>
</template>
<style scoped>
  body{
      background-color: #f2f2f2;
  }
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
<style scoped>
  .pd-container{
      background-color: #f2f2f2;
  }
</style>
