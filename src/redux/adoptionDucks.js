import axios from 'axios';

const qs = require('qs');

const dataInit = {
  status: null,
  data: {},
  message: null,
  error: null,
  error_description: null,
};

// types
const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
const NEXT_INFO_SUCCESS = 'NEXT_INFO_SUCCESS';
const GET_INFO_ERROR = 'GET_INFO_ERROR';
const RESET_INFO = 'RESET_INFO';


// Reducer
export default function adoptionReducer(state = dataInit, action) {
  switch (action.type) {
    case GET_INFO_SUCCESS:
      return { ...state, ...action.payload };
    case NEXT_INFO_SUCCESS:
      return { ...state, ...action.payload };
    case GET_INFO_ERROR:
      return { ...state, ...action.payload };
    case RESET_INFO:
      return dataInit;
    default:
      return dataInit;
  }
}

// Actions
export const postAction = (arrayValues) => async (dispatch, getState) => {
  try {
    const params = qs.stringify(
      {
        fullName: arrayValues[0],
        age: arrayValues[1],
        state: arrayValues[2],
        email: arrayValues[3],
        address: arrayValues[4],
        pet: arrayValues[5],
        why: arrayValues[6],
        occupation: arrayValues[7],
        response_type: arrayValues[8],
        acceptedTerms: arrayValues[9]
      },
      { allowDots: true }
    );

    const res = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/postTest`,
      data: params,
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    if (res.status === 200) {
      dispatch({
        type: GET_INFO_SUCCESS,
        payload: {
          status: res.status,
          data: res.data,
          message: null,
          error: null,
          error_description: null,
        },
      });
    } else {
      dispatch({
        type: GET_INFO_ERROR,
        payload: {
          status: res.status,
          data: null,
          message: null,
          error: res.error,
          error_description: res.error_description,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: GET_INFO_ERROR,
      payload: {
        status: 400,
        data: null,
        message: null,
        error: null,
        error_description: null,
      },
    });
  }
};

export const resetAction = () => async (dispatch, getState) => {
  dispatch({
    type: RESET_INFO
  });

};
