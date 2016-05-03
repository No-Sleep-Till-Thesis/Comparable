import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FORM_UPDATE_VALUE, FORM_RESET } from '../actions/Form_Actions';
import OfferForm from '../components/OfferForm';
import { getJobs } from '../middleware/angelListApi.js';
import { reset } from 'redux-form';

class Offer extends Component {
  render() {
    console.log(this.props);
    const { dispatch } = this.props;

    function handleSubmit(data, dispatch) {
      // Retrieves jobs data from server
      // via angelListApi.js
      getJobs(data.title);

      // Resets form fields after submission
      dispatch(reset('offer'));
    };

    return (
      <div className="container">
        <OfferForm onSubmit={handleSubmit}></OfferForm>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {}
};

export default connect(mapStateToProps)(Offer);
