import React, { Component } from 'react';
import Chart from './chart';

export default class Test extends Component {
  render() {
    console.log(this.context);
    console.log(Chart);
    return (
      <div>
        <h1> Hello, world! </h1>
        <Chart />
      </div>
    );
  }
}
