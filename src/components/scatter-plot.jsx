import React        from 'react';
import d3           from 'd3';
import DataCircles  from './data-circles';
import XYAxis       from './x-y-axis';

const xMax   = (data)  => d3.max(data, (d) => d[0]);
const yMax   = (data)  => d3.max(data, (d) => d[1]);
const xScale = (props) => {

  var arr = props.job.map(function (obj) {
    return obj.mean;
  });

  return d3.scale.linear()
    .domain([0, xMax(arr)])
    .range([props.padding, props.width - props.padding * 2]);
};

const yScale = (props) => {
  var arr = props.job.map(function (obj) {
    return obj.mean;
  });

  return d3.scale.linear()
    .domain([0, yMax(arr)])
    .range([props.height - props.padding, props.padding]);
};

const marshalProps = (props) => {
  const scales = {
    xScale: xScale(props),
    yScale: yScale(props),
  };

  return Object.assign({}, props, scales);
};

export default (props) => {
  const d3Props = marshalProps(props);

  // TODO Changed
  return <svg width={d3Props.width} height={d3Props.height}>
          <DataCircles {...d3Props} update={props.update}/>
          <XYAxis {...d3Props}/>
        </svg>;
};

// <svg width={d3Props.width} height={d3Props.height}>
