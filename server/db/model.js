var thinky = require('./thinky');
var r = thinky.r;
var type = thinky.type;

var User = thinky.createModel('User', {
  email: type.string();
  authID: type.string();
});

var Offer = thinky.createModel('Offer', {
  id: type.string();
  userId: 'refenceAuthID',
  title: type.string();
  location: type.string();
  salary: type.string();
  equity: type.string();
  createdAt: type.date().default(r.now())
});

User.hasMany(Offer, 'offers', 'authOId', 'userId');


// auth id, email - get both from authO

// offer has its own id and and a key called userId -  userId reference authID

exports.user = thinky.createModel('User', User);
exports.offer = thinky.createModel('Offer', Offer);