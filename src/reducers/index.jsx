import { combineReducers } from 'redux';
import Offers from './job_offers';
import Auth from './Auth_Reducers';
import DummyData from './dummy_data';

const rootReducer = combineReducers({
  offers: Offers,
  auth: Auth,
  DummyData: DummyData
});

export default rootReducer;
