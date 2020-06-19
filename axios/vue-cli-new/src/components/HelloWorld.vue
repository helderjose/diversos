<template>
  <div>
    <p>HelloWord.vue</p>
    <pre>
      speedStageOne   {{ consts.speedStageOne }}
      speedStageTwo   {{ consts.speedStageTwo }}
      stopStageOne    {{ consts.stopStageOne }}
      stopStageTwo    {{ consts.stopStageTwo }}
    </pre>
    <p v-if="isShowProgress"> {{ frame }}% </p>
    <div v-html=ajaxResult> </div>
    <button @click="getTest()">Click</button>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data: () => {
      return {
        ajaxResult: "",
        frame: 0,
        isShowProgress: true,
        isRequestFinish: false,

        frameInterval: null,
        isFinish: false,
        isStageOne: true,
        isStageTwo: false,
        isProgressFinish: false,

        consts: Object.freeze({
          speedStageOne: Math.floor(Math.random() * (500 - 10 + 1)) + 10,
          speedStageTwo: Math.floor(Math.random() * (3000 - 1300 + 1)) + 1300,

          stopStageOne: Math.floor(Math.random() * (85 - 60 + 1)) + 60, // sempre tem que ser menor que o stopStageTwo
          stopStageTwo: Math.floor(Math.random() * (97 - 86 + 1)) + 86,  // sempre deve ser maior que o stopStageOne
        })


      }
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
          console.log("deve redirecionar para página de erro");
          return;
        } finally {

        }

        console.log("não pode chegar aqui quando dá erro"); // caso tenha mais código
      },

      startInterval: function(intervalSpeedy) {
        this.frameInterval = setInterval(() => {
          console.log("no interval")

          if(this.frame < 100) this.frame++;

          if(this.frame === 100) {
            clearInterval(this.frameInterval);
            setTimeout(() => {
              this.isShowProgress = false;
              this.isProgressFinish = true;
            }, 500);
          } else if (!this.isRequestFinish && this.frame == this.consts.stopStageTwo) {
            clearInterval(this.frameInterval);
          } else if (!this.isRequestFinish && this.frame == this.consts.stopStageOne) {
            clearInterval(this.frameInterval);
            this.startInterval(this.consts.speedStageTwo)
          }
        }, intervalSpeedy);
      },

      // stopInterval: function() {
      //   clearInterval(this.frameInterval)
      // },

      updateFrame: function (newValue) {
        this.frame = newValue;
      },

      finishProgressBar: function () {
        clearInterval(this.frameInterval)
        this.isRequestFinish = true;
        this.startInterval(10)
      }
    }
  }
  /*
    Já testado:
    - sucesso na chamada;
    - erro na chamada;
    - comportamento do algoritmo
  */
</script>
