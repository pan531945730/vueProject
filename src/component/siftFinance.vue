<template>
  <div class="pd-cont">
    <a v-for="item in items" v-bind:href="item.appTemplateType!=6 ? '/Product/ProductDetail?ProductId='+item.id+'&ProductTypeId='+item.typeId+'&pName='+item.title : '/Product/SunPrivateDetail?pName='+item.title" class="pd-list">
        <div class="list-tit">
          <h2>{{item.title}}
            <span class="forsale" v-if="item.status===1">待售</span>
          </h2>
          <span class="count-down" v-if="item.status===1">倒计时：<em class="countdown" v-bind:data-time="item.startTimeText" v-bind:data-curtime="item.serverTimeText"></em></span>
          <span class="vip" v-if="item.productType2Id===1">新手专享</span>
        </div>
        <ul class="list-info">
          <li v-if="item.eventSpecificIncome!=0"><p class="earn">{{item.interestRateText}}<span class="event">{{item.eventSpecificIncomeText}}</span></p><span>预期年化收益</span></li>
          <li v-else><p class="earn">{{item.interestRateText}}</p><span>预期年化收益</span></li>
          <li><p>{{item.investmentTimeText}}</p><span>{{item.startAmountText}}元起投</span></li>
          <li>
            <div class="ac-warn" v-if="item.status===0 && item.appTemplateType===6 && item.appointment===1">预约中</div>
            <div class="circle" v-else-if="item.status===0">
              <div class="pie_left">
                <div class="left"></div>
              </div>
              <div class="pie_right">
                <div class="right"></div>
              </div>
              <div class="mask"><em>{{parseInt(item.remainingPercentage)}}</em>%<br>可购</div>
            </div>
            <div class="ac-warn haswarn" v-else-if="item.status===2">已售罄</div>
            <div class="ac-warn remind" v-else-if="item.status===1 && item.appointment===0" v-bind:data-proid="item.id">提醒</div>
            <div class="ac-warn haswarn" v-else-if="item.status===1">已提醒</div>
          </li>
        </ul>
      </a>
  </div>
</template>

<script>
import * as _ from '../assets/js/productList'
export default {
  data() {
    return {
      items: [],
      timeArr: [],
      cirArr: []
    }
  },
  mounted: function() {
    this.$http.post('http://192.168.2.13:817/api/Ajax', {
          D: '{"ProductTypeId":2,"PageIndex":1,"PageSize":10}',
          M : 'GetProductList'
        }, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
        this.items = JSON.parse(JSON.parse(response.bodyText).D);
        for(let i=0; i<this.items.length; i++){
          let sta = this.items[i].status;
          let starTime = this.items[i].serverTimeText;
          let endTime = this.items[i].startTimeText;
          let second =(Date.parse(endTime) - Date.parse(starTime))/1000;
          if(second > 0 && sta == 1){
            this.timeArr.push(second);
          }
          //百分比
          let percentage = this.items[i].remainingPercentage;
          if(percentage > 0 && sta == 0){
            this.cirArr.push(percentage);
          }
        }
        for(let i=0; i<this.timeArr.length; i++){
          this.contTimeDown(this.timeArr[i],i);
        }

        for(let i=0; i<this.cirArr.length; i++){
          this.drawCir(this.cirArr[i]*3.6,i);
        }

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  },
  methods : {
    contTimeDown(second,i){
      this.$nextTick(function(){
        _.contTimeDown(second,i);
      })
    },
    drawCir(num,i){
      this.$nextTick(function(){
        _.drawCir(num,i);
      })
    }
  }
}
</script>

<style>
</style>
