var thinky = require('./thinky');
var r = thinky.r;
var type = thinky.type;

var User = thinky.createModel('User', {
  id: type.string();
  email: type.string()
});

var Offer = thinky.createModel('Offer', {
  id: type.string();
  title: type.string();
  location: type.string();
  salary: type.string();
  equity: type.string();
  createdAt: type.date().default(r.now())
});

User.hasMany(Offer, 'offers', 'id', 'userId');