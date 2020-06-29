<template>
  <div>
    <div>
      <hello-world/>
      <hello-canvas/>
      <circle-progress-bar/>
      <circle-progress-bar-ajax/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import HelloCanvas from './components/HelloCanvas'
import CircleProgressBar from './components/CircleProgressBar'
import CircleProgressBarAjax from './components/CircleProgressBarAjax'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloCanvas,
    CircleProgressBar,
    CircleProgressBarAjax
  },
  data: () => ({
    //
  })
}
</script>
