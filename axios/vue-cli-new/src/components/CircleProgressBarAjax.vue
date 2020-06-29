<template>
  <div style="background-color: bisque;">
    <p>CircleProgressBarAjax.vue</p>
    <h1>Circle Progress Bar Ajax</h1>

    <div id="canvas-wrap">
      <canvas id="circle-canvas-ajax" width="150" height="150"></canvas>
      <span id="procent">{{ frame }}</span>
    </div>

    <div>
      <div v-html=ajaxResult> </div>
      <button @click="getTest()">Click</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => {
    return {
      ajaxResult: "",
      frame: 0,
      isRequestFinish: false,
      frameInterval: null,
      isProgressFinish: false,
      consts: Object.freeze({
        speedStageOne: Math.floor(Math.random() * (500 - 10 + 1)) + 10,
        speedStageTwo: Math.floor(Math.random() * (3000 - 1300 + 1)) + 1300,

        stopStageOne: Math.floor(Math.random() * (85 - 60 + 1)) + 60, // sempre tem que ser menor que o stopStageTwo
        stopStageTwo: Math.floor(Math.random() * (97 - 86 + 1)) + 86,  // sempre deve ser maior que o stopStageOne
      }),

      // canvas
      spanProcent: 0,
      vueCanvas: null,
      posX: 0,
      posY: 0,
      onePercentCircle: 360 / 100,
      acrInterval: null
    }
  },
  mounted() {
    let canvas = document.getElementById("circle-canvas-ajax");
    let canvasContext = canvas.getContext("2d");

    this.vueCanvas = canvasContext;
    this.posX = canvas.width / 2;
    this.posY = canvas.height / 2;
    this.vueCanvas.lineCap = "round";

    // this.startInterval();
  },
  methods: {
    getTest: async function () {
      this.startInterval(this.consts.speedStageOne);

      try {
        let response = await axios.get(
          "http://localhost:3000/ajax-info",
          // "http://10.0.0.135:3000/ajax-info",
          {
            // onUploadProgress:  function (progressEvent) {
            //   console.log("onUploadProgress progressEvent: ", progressEvent)
            // },
            // onDownloadProgress: function (progressEvent) {
            //   // quando dá erro não entra aqui
            //   console.log(Math.floor((progressEvent.loaded * 100) / progressEvent.total))
            //   console.log(progressEvent.loaded, progressEvent.total)
            //   console.log("onDownloadProgress progressEvent: ", progressEvent)
            // },
          }
        );

        this.finishProgressBar();

        await new Promise((resolve) => {
          let promiseInterval = setInterval(() => {
            if (this.isProgressFinish) {
              clearInterval(promiseInterval);
              resolve();
            }
          }, 250);
        });

        console.log("fim")
        this.ajaxResult = response.data

      } catch(error) {
        clearInterval(this.frameInterval)
        console.log("error: ", error)
        console.log("deve redirecionar para página de erro");
        return;
      } finally {

      }

      console.log("não pode chegar aqui quando dá erro"); // caso tenha mais código
    },
    startInterval: function(intervalSpeedy) {
      // let timeToWait = 2000; // duracao do timer
      // let onePercentTimeToWait = timeToWait / 100;
      // let progressPercentage = 0;

      // this.spanProcent = progressPercentage;

      this.frameInterval = setInterval (() => {

        if(this.frame < 100) this.frame++;

        if(this.frame === 100) {
          clearInterval(this.frameInterval);
          setTimeout(() => {
            this.isProgressFinish = true;
          }, 500);
        } else if (!this.isRequestFinish && this.frame == this.consts.stopStageTwo) {
          clearInterval(this.frameInterval);
        } else if (!this.isRequestFinish && this.frame == this.consts.stopStageOne) {
          clearInterval(this.frameInterval);
          this.startInterval(this.consts.speedStageTwo)
        }
        this.vueCanvas.clearRect( 0, 0, this.vueCanvas.width, this.vueCanvas.height );
        this.spanProcent = this.frame;  // progressPercentage

        this.vueCanvas.beginPath();
        this.vueCanvas.arc( this.posX, this.posY, 76, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
        this.vueCanvas.strokeStyle = 'orange'; // cor de fundo da barra redonda "cinza"
        this.vueCanvas.lineWidth = '8'; // fundo cinza
        this.vueCanvas.stroke();

        this.vueCanvas.beginPath();
        this.vueCanvas.arc( this.posX, this.posY, 76, (Math.PI/180) * 270, (Math.PI/180) * (270 + this.frame/*progressPercentage*/ * this.onePercentCircle) );
        this.vueCanvas.strokeStyle = 'darkblue'; // cor do preenchimento (progresso) da barra redonda
        this.vueCanvas.lineWidth = '8';
        this.vueCanvas.stroke();

        // progressPercentage++;

        // if(progressPercentage === 100) {
        //   clearInterval(this.frameInterval);
        //   console.log("fim");
        // }
      }, intervalSpeedy);
    },

    finishProgressBar: function () {
      clearInterval(this.frameInterval)
      this.isRequestFinish = true;
      this.startInterval(10)
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

  #circle-canvas-ajax {
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