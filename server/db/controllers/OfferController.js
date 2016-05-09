var Offer = require('../models/Offer');

module.exports = {
  getAllOffers: function(req, res) {

    Offer.run()
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    });
  },
  createOffer: function(req, res) {

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

