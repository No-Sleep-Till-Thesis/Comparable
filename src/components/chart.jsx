import React                from 'react';
import {connect}            from 'react-redux';
// import * as actionCreators  from '../actions/action_creators';
import ScatterPlot          from './scatter-plot';

const styles = {
  width   : 1500,
  height  : 900,
  padding : 30,
};

const Chart = (props) => {
  const updateCircle = (circle) => {
    circle.fill = 'black';
  };
  console.log('---');
  console.log('props ', props);
  return <div>
    <h1>Playing With React and D3</h1>
    <ScatterPlot {...props} {...styles} update={updateCircle}/>
    <h3 id="equity">Equity</h3>
    <h3 id="salary">Salary</h3>
    
  </div>;
};

export default connect((state) => state)(Chart);
