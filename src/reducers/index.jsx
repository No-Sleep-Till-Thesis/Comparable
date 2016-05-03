import { combineReducers } from 'redux';
import Offers from './job_offers';
import Auth from './Auth_Reducers';
import DummyData from './dummy_data';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  offers: Offers,
  auth: Auth,
  data: DummyData
  form: formReducer,
});

export default rootReducer;
