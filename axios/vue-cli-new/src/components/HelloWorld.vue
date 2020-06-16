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

        await new Promise((resolve) => {
          if(this.isProgressFinish) {
            resolve();
          }
        });

        console.log("fim")
        this.ajaxResult = response.data
      },

      startInterval: function(intervalSpeedy) {
        this.frameInterval = setInterval(() => {
        this.frame++;

          if(this.frame === 83) {
            clearInterval(this.frameInterval);
            setTimeout(() => {
              this.isShowProgress = false;
              this.isProgressFinish = true;
            }, 500);
          } else if (this.frame == 80) {
            clearInterval(this.frameInterval);
            this.startInterval(500)
          }
        }, intervalSpeedy);
      },

      stopInterval: function() {
        clearInterval(this.frameInterval)
      },

      updateFrame: function (newValue) {
        this.frame = newValue;
      }
    }
  }
</script>
