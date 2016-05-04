import JOB_MATCH from '../actions/Job_Matches';

export default function(state = [], action) {
  // action.type is undefined for some reason
  console.log('inside action');
  console.log(action);
    console.log(action.payload);
  switch(action.type) {
  case "JOB_MATCH": 
    // return state.concat([action.payload.data]);
    // return [ action.payload.data, ...state ]; 
    // console.log('job matched');
    console.log('-------');
    console.log(action.payload);
    return [action.payload.data, ...state];
  }
  return state;
}