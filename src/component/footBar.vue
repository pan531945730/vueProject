<template>
  <div class="foot-bar">
      <a href="https://itunes.apple.com/us/app/94bank-bu-shi-yin-xing-de94bank/id878005164?l=zh&ls=1&mt=8">下载APP</a>
      <a href="javascript:void(0);" id="contact_us">联系我们</a>
      <a href="/Product/ProductList">理财中心</a>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      author: "微信公众号 jinkey-love"
    }
  }
}
</script>

<style>
.foot-bar{
    position: fixed;
    display: -webkit-box;
    left: 0;
    bottom: 0;
    width: 100%;
    line-height: 49px;
    background-color: #333;
    font-size: 1.4rem;
}
.foot-bar a{
    display: block;
    -webkit-box-flex:1;
    color: #fff;
    font-size: 1.4rem;
    text-align: center;
}
.info{
    padding: 10px 0;
    line-height: 22px;
    font-size: 1.4rem;
    text-align: center;
}
</style>
