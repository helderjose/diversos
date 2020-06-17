<template>
  <div>
    <p>HelloWord.vue</p>
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
        isProgressFinish: false
      }
    },
    methods: {
      getTest: async function () {
        console.log("início")

        this.startInterval(10);

        let response = await axios.get(
          "http://localhost:3000/ajax-info",
          // "http://10.0.0.135:3000/ajax-info",
          {
            // onUploadProgress:  function (progressEvent) {
            //   console.log("onUploadProgress progressEvent: ", progressEvent)
            // },
            // onDownloadProgress: function (progressEvent) {
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
          // if(this.isProgressFinish) {
          //   resolve();
          // }
        });

        console.log("fim")
        this.ajaxResult = response.data
      },

      startInterval: function(intervalSpeedy) {
        this.frameInterval = setInterval(() => {



          // console.log(this.frame)

          if(this.frame < 100) this.frame++;


          // console.log(this.frame)

          if(this.frame === 100) {
            console.log("no 100% clear")
            console.log("clearInterval ", this.frameInterval)
            clearInterval(this.frameInterval);
            setTimeout(() => {
              this.isShowProgress = false;
              this.isProgressFinish = true;
            }, 500);
          } else if (!this.isRequestFinish && this.frame == 95) {
            console.log("clearInterval ", this.frameInterval)
            clearInterval(this.frameInterval);
            // this.startInterval(500)
          } else if (!this.isRequestFinish && this.frame == 80) {
            console.log("clearInterval ", this.frameInterval)
            clearInterval(this.frameInterval);
            console.log("depois clearInterval ", this.frameInterval)
            this.startInterval(1300)
          }
        }, intervalSpeedy);
      },

      stopInterval: function() {
        clearInterval(this.frameInterval)
      },

      updateFrame: function (newValue) {
        this.frame = newValue;
      },

      finishProgressBar: function () {
        this.stopInterval();
        this.isRequestFinish = true;
        this.startInterval(10)
      }
    }
  }
</script>
