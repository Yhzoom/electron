<template>
  <div id="ruler">
    <canvas id="rulerX" ></canvas>
    <canvas id="rulerY" ></canvas>
  </div>
</template>
<style>
  #ruler {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    width: 25px;
    height: 25px;
    z-index: 2;
  }
  #rulerX {
    position: absolute;
    top: 0;
    left: 25px;
    width: 2100px;
    height: 25px;
  }
  #rulerY {
    position: absolute;
    top: 25px;
    left: 0;
    width: 25px;
    height:1400px;
  }
</style>
<script setup>
  import { onMounted } from 'vue'
  function ruler () {
    const initParams = {
        background: "#333", //刻度尺背景色
        color: "#ccc", //刻度线和字体的颜色
    };

    //画刻度尺
    function drawRuler(canvas, type) {
        // count =  10;
        const winWidth = canvas.offsetWidth; //容器宽度
        const winHeight = canvas.offsetHeight; //容器宽度
        // const division = winWidth / 10; //每个刻度的距离 分割线
        //刻度值数组
        const cxt = canvas.getContext("2d");
        if (window.devicePixelRatio) {
            canvas.width = window.devicePixelRatio * winWidth;
            canvas.height = window.devicePixelRatio * winHeight;
            canvas.style.transform = "scale(" + 1 / window.devicePixelRatio + ")";
            canvas.style.transformOrigin = "left top";
            cxt.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
        const scaleValueList = [];
        const length = type === 'x' ? winWidth : winHeight; // 长度
        for (let i = 0; i <= length; i += 10) {
            scaleValueList.push(i);
        }
        //清空画布
        cxt.clearRect(0, 0, winWidth, winHeight);
        //刻度尺背景
        cxt.fillStyle = initParams.background;
        cxt.fillRect(0, 0, winWidth, winHeight);
        //画刻度线
        const fillText = []; // 刻度文字
        for (let i = 0; i < scaleValueList.length; i++) {
            let value = scaleValueList[i];
            cxt.beginPath();
            cxt.save();
            cxt.strokeStyle = initParams.color ;
            cxt.lineWidth = 1;
            // cxt.lineCap = "round";
            if(type === 'x')
            {
              cxt.moveTo(value , 0);
              cxt.lineTo(value , 6);
            }
            else {
              cxt.moveTo(0,value);
              cxt.lineTo(6,value);
            }

            if (value % 100 === 0) {
                cxt.strokeStyle = initParams.color ;
                if(type === 'x'){
                  cxt.lineTo(value , 12);
                }else{
                  cxt.lineTo(12,value);
                }
                fillText.push(value)
            }
            cxt.stroke();
            cxt.restore();
            cxt.closePath();
        }

        // 添加体重数字
        cxt.beginPath();
        cxt.font = "10px Arial";
        cxt.fillStyle = initParams.color;
        // cxt.textAlign = "center";
        // if(type === 'y'){
        //   cxt.rotate(90 * Math.PI / 180)
        // }
        cxt.textBaseline = "middle";
        fillText.forEach(function (num, i) {
          if(type === 'x'){
            cxt.fillText(num.toString(), num , 18);
          }
          else{
            let textArr = num.toString().split('');
            // let y = num - (textArr.length * 9 / 2);
            textRotate(cxt,textArr,16,num)
          }
        });
        cxt.closePath();

    }
    // 文字旋转
    function textRotate(cxt, textArr,x, y) {
      let letterSpacing = 1; // 设置字间距
      for(let i = 0; i < textArr.length; i++){
          const str = textArr[i];
          if(str.match(/[A-Za-z0-9]/)){ // 非汉字 旋转
              cxt.save();
              cxt.translate(x,y);
              cxt.rotate(Math.PI/180*90);
              cxt.textBaseline = 'middle';
              cxt.fillText(str,0,0);
              cxt.restore();
              y+=cxt.measureText(str).width+letterSpacing; // 计算文字宽度
          }
          else if(str.match(/[\u4E00-\u9FA5]/)){
              cxt.save();
              cxt.textBaseline = 'top';
              cxt.fillText(str,x,y);
              cxt.restore();
              y+=cxt.measureText(str).width+letterSpacing; // 计算文字宽度
          }
      }
    }
    let rulerX = document.getElementById("rulerX"); // X轴尺子
    let rulerY = document.getElementById("rulerY"); // Y轴尺子

    drawRuler(rulerX,'x');
    drawRuler(rulerY,'y');
}

onMounted(() => {
  //调用刻度尺方法
  ruler();
  })
</script>