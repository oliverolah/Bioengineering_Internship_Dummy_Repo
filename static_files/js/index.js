// console.log("Hello js");

import { select } from 'd3';
import { colorLegend } from '../js/colorLegend';
import { scaleOrdinal, scaleSqrt } from 'd3-scale';
import { sizeLegend } from '../js/sizeLegend';

const svg = select('svg');

const colorScale = scaleOrdinal()
   .domain(['apple', 'lemon', 'limes', 'orange'])
   .range(['#d90b0b', '#e8d505', 'green', 'orange']);

svg.append('g')
   .attr('transform', `translate(100, 100)`)
   .call(colorLegend, {
      colorScale,
      circleRadius: 30,
      spacing: 80,
      textOffset: 50
   });

// Size Legend
const sizeScale = scaleSqrt()
   .domain([0, 10])
   .range([0, 50]);

svg.append('g')
   .attr('transform', `translate(600, 100)`)
   .call(sizeLegend, {
      sizeScale,
      spacing: 80,
      textOffset: 50,
      numTicks: 5,
      circleFill: 'rgba(0,0,0,0.5)'
   });