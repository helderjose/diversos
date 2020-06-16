<template>
  <div>
    <p>aaaaaaaa</p>
    <div v-html=ajaxResult> </div>
    <button @click="getTest()">Click</button>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data: () => {
      return {
        ajaxResult: ""
      }
    },
    methods: {
      getTest: async function () {
        console.log("aaaaaaaaaaaa")
        let response = await axios.get(
          "http://localhost:3000/ajax-info",
          {
            onUploadProgress:  function (progressEvent) {
              console.log("onUploadProgress progressEvent: ", progressEvent)
            },
            onDownloadProgress:  function (progressEvent) {
              console.log(Math.floor((progressEvent.loaded * 100) / progressEvent.total))
              console.log(progressEvent.loaded, progressEvent.total)
              console.log("onDownloadProgress progressEvent: ", progressEvent)
            },


          }
          );
        console.log("fim")
        console.log(response.data)
        this.ajaxResult = response.data
      }
    }
  }
</script>
