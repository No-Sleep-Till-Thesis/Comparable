import { FORM_UPDATE_VALUE, FORM_RESET } from '../actions/Form_Actions'
import assign from 'lodash.assign';

const initialState = { //define initial state - an empty form
  values: {},
};

export default (state = initialState, action) => {
  switch (action.type) {

  case FORM_UPDATE_VALUE:
    return assign({}, state, {
      values: assign({}, state.values, {
        [action.name]: action.value,
      }),
    });

  case FORM_RESET:
    return initialState;

  default:
    return state;
  }
};
