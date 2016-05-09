var thinky = require('../thinky');
var Offer = require('./Offer');

const r = thinky.r;
const type = thinky.type;

const User = thinky.createModel('User', {
  id: type.string(),
  email: type.string(),
  authId: type.string(),
  createdAt: type.date().default(r.now()),
});

// User.hasMany(Offer, 'offer', 'id', 'userId');

module.exports = User;


