export function contTimeDown(second,i,ele){
    timeDown(second,i,ele);
    let time = setInterval(()=>{
      second --;
      timeDown(second,i,ele);
      if(second <= 0){
        clearInterval(time);
        location.reload();
      }
    },1000)
}
function timeDown(second,i,ele){
  let d = parseInt(second/86400)
  let h = formate(parseInt((second%86400)/3600))
  let m = formate(parseInt(((second%86400)%3600)/60))
  let s = formate(parseInt(((second%86400)%3600)%60))
  let time = `${d}天${h}:${m}:${s}`
  ele.innerHTML = time;
}
function formate(time){
  if(time>=10){
       return time
   }else{
       return `0${time}`
   }
}
export function drawCir(num,i){
    if(num<=180){
      var rightCss = 'rotate('+num+'deg)';
      var leftCss = 'rotate(0deg)';
    }else {
      var rightCss = 'rotate(180deg)';
      var leftCss= 'rotate(' + (num - 180) + 'deg)';
    }
    let rigEle = document.getElementsByClassName('right');
    let leftEle = document.getElementsByClassName('left');
    if(rigEle.length>0 && leftEle.length){
      rigEle[i]['style']['transform'] = rightCss;
      leftEle[i]['style']['transform'] = leftCss;
    }
}
