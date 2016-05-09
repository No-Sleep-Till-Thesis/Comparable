var thinky = require('../thinky');
var User = require('./User');

const r = thinky.r;
const type = thinky.type;

const Offer = thinky.createModel('Offer', {
  id: type.string(),
  title: type.string().required(),
  location: type.string(),
  salary: type.number(),
  equity: type.string(),
  userId: type.string(),
  
});

module.exports = Offer;

// Offer.belongsTo(User, 'user', 'userId', 'id');