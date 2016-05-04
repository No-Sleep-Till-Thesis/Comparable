import axios from 'axios';
export const JOB_MATCH = "JOB_MATCH";

export function sendJob(title) {
  
  var request = axios.get('/api/jobs', {
    params: {
      title: title
    }
  });
  console.log('inside action');
  console.log(request);
  return {
    type: JOB_MATCH,
    payload: request
  };
}