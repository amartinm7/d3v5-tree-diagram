<template>
  <div>
    Hello??
    <h1>{{ msg }}</h1>
    <div class="svgTree">
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'Svgtree',
  props: [
    'msg'
  ],
  data() {
    return {
      property: 'Blank'
    }
  },
  computed: {
    propertyComputed() {
      console.log('I change when this.property changes.')
      return this.property
    }
  },
  created() {
    this.property = 'Example property update.'
    console.log('propertyComputed will update, as this.property is now reactive.')
  },
  mounted() {
    const nodes = [ {id: 'ABC', group: 1, level: 1, value:50}, {id:'XYZ', group: 2, level: 1, value:100}, ]
    const json = {'nodes':[
        {'y':60, 'x':100, 'r':20, 'label':'Node 1', 'color': 'red'},
        {'y':60, 'x':200, 'r':25, 'label':'Node 2', 'color': 'blue'},
        {'y':60, 'x':300, 'r':30, 'label':'Node 3', 'color': 'green'}
      ]};

    console.log('mounted...')
    const svg = d3.select('.svgTree').append('svg').attr('width','960').attr('height','500')
    const node = svg.selectAll('g.mynode').data(json.nodes)

    const nodeEnter = node.enter().append('g')
      .attr('class', 'mynode')
      .attr('transform', function(d) {
        return `translate(${d.y}, ${d.x})` })

    console.log(`${JSON.stringify(node)}`)

    nodeEnter.append('circle')
      .attr('r', function(d) { return d.r })
      .attr('style', 'fill: steelblue; stroke: lightblue;')
      .attr('dx', function(d) { return d.x })
      .attr('dy', function(d) { return d.y })
    nodeEnter.append('text')
      .attr('x', function(d) { return (0 - d.label.length * 3) - 1 })
      .attr('y', 4)
      .text(function(d) { return d.label })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .mynode circle {
    fill: #fff;
    stroke: steelblue;
    stroke-width: 3px;
  }
  .mynode text { font: 12px sans-serif; }
  .link {
    fill: none;
    stroke: #ccc;
    stroke-width: 2px;
  }
</style>
