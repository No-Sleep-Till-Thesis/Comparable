var Offer = require('../models/Offer');

const controller = {
  getAllOffers: function(req, res) {
    console.log('getting all offers here');
    res.status(201).send('in offercontroller 333');
  },
  createOffer: function(req, res) {
    console.log('in createOffer');

    const offer = new Offer(req.body);
    offer.save()
    .then(() => {
      res.status(201).send(req.body);
    })
    .error(() => {
      res.status(201).send('there is an error, not saved');
    })
  }
}

module.exports = controller;
