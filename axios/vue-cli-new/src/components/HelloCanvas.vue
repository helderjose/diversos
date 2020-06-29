<template>
  <div style="background-color: orange">
    <p>HelloCanvas.vue</p>
    <h1>Rectangle Canvas</h1>

    <canvas id="canvas"></canvas>

    <div>
      <button
        type="button"
        @click="drawRect()">
        drawRect
      </button>

      <button
        type="button"
        @click="addWidth()">
        +
      </button>

      <button
        type="button"
        @click="subWidth()">
        -
      </button>
    </div>
  </div>
</template>

<script>
// var c = document.getElementById("c");
// var ctx = c.getContext("2d"); // aqui dá c is not defined
// ctx.beginPath();
// ctx.rect(20, 20, 150, 100);
// ctx.stroke();

export default {
  mounted() {
    let canvas = document.getElementById("canvas");
    // console.log("canvas: ", canvas)
    let ctx = canvas.getContext("2d");
    // ctx.beginPath();
    // ctx.rect(20, 20, 150, 100);
    // ctx.stroke();
    this.vueCanvas = ctx;
  },
  data: () => {
    return {
      vueCanvas: null,
      rectWidth: 150,
    }
  },
  methods: {
    drawRect() {
      // clear canvas
      this.vueCanvas.clearRect(0, 0, 400, 200);

      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.rect(20, 20, this.rectWidth, 100);
      this.vueCanvas.stroke();
    },
    addWidth() {
      this.rectWidth += 10
      this.drawRect()
    },
    subWidth() {
      this.rectWidth -= 10
      this.drawRect()
    }
  }
}
</script>

<style lang="css" scoped>
#canvas {
  height: 200px;
  width: 400px;
  border: 1px solid gray;
}
</style>