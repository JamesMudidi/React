import axios from 'axios';
import {
  AUTHENTICATE,
  GET_INCIDENT_SUCCESS,
  GET_INCIDENT_FAIL,
} from './types';

const baseURL = 'https://irepoter-v3.herokuapp.com/api/v2/';

const authenticate = () => ({
  type: AUTHENTICATE,
});

const getIncidentSuccess = response => ({
  type: GET_INCIDENT_SUCCESS,
  payload: response.data.data,
});

const getIncidentFail = () => ({
  type: GET_INCIDENT_FAIL,
});

// const token = sessionStorage.getItem('token');
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjIwOTA5OTIsImlhdCI6MTU2MjAwNDU5Miwic3ViIjp7ImlkIjo1LCJmaXJzdG5hbWUiOiJKYW1lcyIsImxhc3RuYW1lIjoiTXVkaWRpIiwib3RoZXJuYW1lcyI6IiIsImVtYWlsIjoibXVkaWRpLmppbW15QGdtYWlsLmNvbSIsInBob25lbnVtYmVyIjoiMDc1OTg4ODI3MCIsInVzZXJuYW1lIjoiSmFtZXMiLCJwYXNzd29yZCI6InBia2RmMjpzaGEyNTY6NTAwMDAkQm96SnVpU0EkODM2MmY3N2U5NmEzZWNmZWU1MTdhZGMxYjcxYWY2MWUyNTk1NzMzMDdmOTVlMmE1Y2RiNGZlYmJkMjlkYmVkZiIsInJlZ2lzdGVyZWQiOm51bGwsImlzYWRtaW4iOmZhbHNlfX0.AV8OPY_eKlu3-C1MMCF7JlOv_SAu1nZzJ4mjFl2spMo';

const incidentActions = () => (dispatch) => {
  dispatch(authenticate());
  axios({
    url: `${baseURL}incidents`,
    method: 'get',
    headers: {
      content_type: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    dispatch(getIncidentSuccess(response));
  })
    .catch((error) => {
      dispatch(getIncidentFail(error));
    });
};

export default incidentActions;
