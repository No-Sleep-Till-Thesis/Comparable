import thinky from '../thinky';
import User from '../User';

const r = thinky.r;
const type = thinky.type;

const Offer = thinky.createModel('Offer', {
  id: type.string(),
  title: type.string().required(),
  location: type.string(),
  salary: type.number(),
  equity: type.string(),
  userId: type.string(),
  createdAt: type.date.default(r.now()),
});

export default Offer;

Offer.belongsTo(User, 'user', 'userId', 'id');