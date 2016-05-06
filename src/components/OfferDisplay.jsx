import React, { Component } from 'react';

export default class OfferDisplay extends Component {
  render() {
    // Grab the offer property from the props
    const { offer } = this.props.data;

    // Render the job offer information on the page
    return (
      <div className="row offer-form">
        <div className="col-md-10 col-md-offset-1">
          {offer &&
            <ul className="displayList">
              <li className="text-center offerTitle">{offer.title}</li>
              <li className="text-center">
                Location: {offer.location} | Salary: {offer.salary} | Equity: {offer.equity}
              </li>
            </ul>}
        </div>
      </div>
    );
  }
};
