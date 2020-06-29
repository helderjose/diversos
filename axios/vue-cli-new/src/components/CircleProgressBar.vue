<template>
  <div style="background-color: bisque;">
    <p>CircleProgressBar.vue</p>
    <h1>Circle Progress Bar</h1>

    <div id="canvas-wrap">
      <canvas id="circle-canvas" width="150" height="150"></canvas>
      <span id="procent">{{ spanProcent }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      spanProcent: 0,
      vueCanvas: null,
      posX: 0,
      posY: 0,
      onePercentCircle: 360 / 100,
      acrInterval: null
    }
  },
  mounted() {
    let canvas = document.getElementById("circle-canvas");
    let canvasContext = canvas.getContext("2d");

    this.vueCanvas = canvasContext;
    this.posX = canvas.width / 2;
    this.posY = canvas.height / 2;
    this.vueCanvas.lineCap = "round";

    this.arcMove();
  },
  methods: {
    arcMove: function() {
      let timeToWait = 2000; // duracao do timer
      let onePercentTimeToWait = timeToWait / 100;
      let progressPercentage = 0;

      this.spanProcent = progressPercentage;

      this.acrInterval = setInterval (() => {
        this.vueCanvas.clearRect( 0, 0, this.vueCanvas.width, this.vueCanvas.height );
        this.spanProcent = progressPercentage;

        this.vueCanvas.beginPath();
        this.vueCanvas.arc( this.posX, this.posY, 76, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
        this.vueCanvas.strokeStyle = 'orange'; // cor de fundo da barra redonda "cinza"
        this.vueCanvas.lineWidth = '8'; // fundo cinza
        this.vueCanvas.stroke();

        this.vueCanvas.beginPath();
        this.vueCanvas.arc( this.posX, this.posY, 76, (Math.PI/180) * 270, (Math.PI/180) * (270 + progressPercentage * this.onePercentCircle) );
        this.vueCanvas.strokeStyle = 'darkblue'; // cor do preenchimento (progresso) da barra redonda
        this.vueCanvas.lineWidth = '8';
        this.vueCanvas.stroke();

        progressPercentage++;

        if(progressPercentage > 100) {
          clearInterval(this.acrInterval);
          console.log("fim");
        }
      }, onePercentTimeToWait);
    }
  }
}
</script>

<style lang="css" scoped>
  /* :root {
    background-color: #fff;
  }

  body {
    background-color: black;
  } */

  #canvas-wrap {
    width: 205px;
    height: 205px;
    position: relative;
    border-radius: 50%;
    background-color: orange;;
  }

  #circle-canvas {
    top: 50%;
    left: 50%;
    border: solid 2px darkblue;
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: orange;
  }

  span#procent {
    top: 50%;
    left: 50%;
    color: white;
    display: block;
    position: absolute;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }

  span#procent::after {
    content: '%';
  }
</style>