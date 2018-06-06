import {
  FETCH_PUBLISHERS_FAILURE,
  FETCH_PUBLISHERS_SUCCESS,
  FETCH_PUBLISHERS_REQUEST,
} from '../actions/types';

const publishers = (state = { fetching: true }, action) => {
  switch(action.type) {
    case FETCH_PUBLISHERS_REQUEST:
      return state;//?
    case FETCH_PUBLISHERS_FAILURE:
      return { ...state, error: action.error, fetching: false }
    case FETCH_PUBLISHERS_SUCCESS:
      return { ...state, data: action.data, fetching: false }
    default:
      return state;
  }
};

export default publishers;
