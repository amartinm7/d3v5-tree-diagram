<template>
  <div class="hello" id="mySvgTree">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
import horizontalTreeDiagram from '../services/horizontalTreeDiagram'

export default {
  name: 'SvgTree',
  props: {
    msg: String
  },
  mounted: function () {
    horizontalTreeDiagram.draw()
  }
}
</script>

<style>
  .node circle {
    fill: #fff;
    stroke: steelblue;
    stroke-width: 3px;
  }

  .node text { font: 12px sans-serif; }

  .node--internal text {
    text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
  }

  .link {
    fill: none;
    stroke: #ccc;
    stroke-width: 2px;
  }

</style>
