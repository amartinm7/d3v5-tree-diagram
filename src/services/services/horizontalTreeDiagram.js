import * as d3 from 'd3'
import readDependencies from './readDependencies'

class HorizontalTreeDiagram {
  constructor() {
    // eslint-disable-next-line no-console
    console.log(`VerticalTreeDiagram...`)
  }

  draw() {
    const treeData = readDependencies.getDependencies()

// set the dimensions and margins of the diagram
    const margin = {top: 20, right: 90, bottom: 30, left: 300},
      width = 700 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom


// declares a tree layout and assigns the size
    const treemap = d3.tree()
      .size([height, width])

//  assigns the data to a hierarchy using parent-child relationships
    let nodes = d3.hierarchy(treeData, function (d) {
      return d.children
    });

// maps the node data to the tree layout
    nodes = treemap(nodes)

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
    const svg = d3.select('body').append('svg')
        .attr('width', 1200)
        .attr('height', 800),
      g = svg.append('g')
        .attr('transform',
          'translate(' + margin.left + ',' + margin.top + ')')

// adds the links between the nodes
    const link = g.selectAll('.link')
      .data(nodes.descendants().slice(1))
      .enter().append('path')
      .attr('class', 'link')
      .attr('d', function (d) {
        return 'M' + d.y + ',' + d.x
          + 'C' + (d.y + d.parent.y) / 2 + ',' + d.x
          + ' ' + (d.y + d.parent.y) / 2 + ',' + d.parent.x
          + ' ' + d.parent.y + ',' + d.parent.x
      });

// adds each node as a group
    const node = g.selectAll('.node')
      .data(nodes.descendants())
      .enter().append('g')
      .attr('class', function (d) {
        return 'node' +
          (d.children ? ' node--internal' : ' node--leaf');
      })
      .attr('transform', function (d) {
        return 'translate(' + d.y + ',' + d.x + ')'
      })

// adds the circle to the node
    node.append('circle')
      .attr('r', 10)
      .attr('style', function (d) {
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(d.data.color))
        return `stroke:${d.data.color.stroke};fill:${d.data.color.fill}`
      })

// adds the text to the node
    node.append('text')
      .attr('dy', '.35em')
      .attr('x', function (d) {
        return d.children ? -13 : 13
      })
      .style('text-anchor', function (d) {
        return d.children ? 'end' : 'start'
      })
      .text(function (d) {
        return d.data.name
      })
  }
}
export default new HorizontalTreeDiagram()


