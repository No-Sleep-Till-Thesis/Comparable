import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPost} from '../actions/action_creators';
class Test extends Component {
  constructor(props) {
    super(props);

    this.renderData = this.renderData.bind(this);
  }


  renderData() {
    // console.log(this.props.offer);
    this.props.fetchPost();
  }

  render() {
    return (
      <div onClick={this.renderData}>
        good morning
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    offers: state.offers,
    data: state.data
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPost: fetchPost}, dispatch);
  // this.prop.fetchWeather now exist in SearchBar after the connect
}



export default connect(mapStateToProps, mapDispatchToProps)(Test);