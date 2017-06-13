<template>
  <div class="login-warp">
    <div class="logo">
       <img src="../../assets/images/logo.png" alt="94bank" width="100%" height="auto">
    </div>
    <div class="bd-form">
        <label>
            <em class="bd-ico tel"></em>
            <span class="bd-input">
                <input type="tel" placeholder="请输入手机号码" value="" maxlength="11" id="bd_tel">
                <i class="clear"></i>
            </span>
        </label>
        <label>
            <em class="bd-ico pwd"></em>
            <span class="bd-input">
                <input type="password" placeholder="请输入94bank登录密码" value=""  id="bd_pwd">
                <i class="clear"></i>
                <em class="eyes"></em>
            </span>
        </label>
        <label class="imgcode-mod">
            <em class="bd-ico imgcode"></em>
            <span class="bd-input">
                <input type="number" placeholder="请输入图形验证码" value=""  maxlength="4" id="bd_imgcode">
                <i class="clear"></i>
            </span>
            <img src="#" width="75" height="30" class="img-code" alt="图形验证码">
        </label>
        <p class="error-tip"><span></span><a href="#" class="log-findpwd">忘记密码？</a></p>
        <a href="javascript:void(0);" class="bd-btn">立即登录</a>
    </div>
    <p class="fir-act">新用户，<a href="#">立即注册</a></p>
    <foot-bar></foot-bar>
  </div>
</template>
<style>

</style>
<script>
  import footBar from '../../component/footBar.vue';
  export default{
    components: {
      footBar
    },
    data(){
      return{
      }
    }
  }
</script>
<style scoped>
  .logo {
    padding: 55px 25% 26px 25%;
  }
  .bd-form {
    padding: 0 15px;
  }
  .bd-form label {
    display: -webkit-box;
    -webkit-box-align: center;
    padding: 17px 0 8px 0;
  }
  .bd-form .imgcode-mod{
    display: none;
  }
  .bd-form .bd-ico {
    display: block;
    width: 28px;
    height: 22px;
  }
  .bd-input {
    display: -webkit-box;
    -webkit-box-flex: 1;
    -webkit-box-align: center;
    height: 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e5e5e5;
  }
  .bd-input input {
    display: block;
    -webkit-box-flex:1;
    border: none;
    font-size: 1.4rem;
    color: #333;
  }
  .tel {
    background: url(../../assets/images/tel.png) no-repeat;
    background-size: 13px 18px;
  }
  .pwd {
    background: url(../../assets/images/pwd.png) no-repeat;
    background-size: 15px 16px;
  }
  .imgcode {
    background: url(../../assets/images/imgcode.png) no-repeat;
    background-size: 15px 16px;
  }
  .clear {
    display: none;
    width: 30px;
    height: 30px;
    background: url(../../assets/images/clear.png) no-repeat center center;
    background-size: 15px 15px;
  }
  .eyes {
    display: block;
    width: 30px;
    height: 30px;
    background: url(../../assets/images/eyes.png) no-repeat center center;
    background-size: 15px 9px;
  }
  .open-eyes {
    background: url(../../assets/images/open-eyes.png) no-repeat center center;
    background-size: 15px 9px;
  }
  .img-code{
    margin-left: 30px;
  }
  .error-tip {
    height: 20px;
    padding-top: 8px;
    color: #ff6666;
    font-size: 1.4rem;
  }
  .bd-btn {
    display: block;
    width: 100%;
    line-height: 45px;
    border-radius: 5px;
    margin-top: 14px;
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
    background-color: #ff5959;
  }
  .log-findpwd{
    float: right;
    color: #ff6666;
  }
  .fir-act{
    padding: 20px 15px;
    text-align: center;
    color: #b2b2b2;
  }
  .fir-act a{
    color: #ff5959;
  }
</style>
