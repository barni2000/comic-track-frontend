import {
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS,
  ADD_READ_FAILURE,
  ADD_READ_SUCCESS,
  ADD_WISH_FAILURE,
  ADD_WISH_SUCCESS,
  REMOVE_READ_FAILURE,
  REMOVE_READ_SUCCESS,
  REMOVE_WISH_FAILURE,
  REMOVE_WISH_SUCCESS,
} from '../actions/types';

const profile = (state = { fetching: true, is_authenticated: false }, action) => {
  switch(action.type) {
    case ADD_READ_FAILURE:
    case REMOVE_READ_FAILURE:
    case ADD_WISH_FAILURE:
    case REMOVE_WISH_FAILURE:
      return { ...state, error: action.error, fetching: false}
    case FETCH_PROFILE_FAILURE:
      return { ...state, error: action.error, fetching: false, is_authenticated: false }
    case ADD_READ_SUCCESS:
    case REMOVE_READ_SUCCESS:
    case ADD_WISH_SUCCESS:
    case REMOVE_WISH_SUCCESS:
    case FETCH_PROFILE_SUCCESS:
      return { ...state, data: action.data, fetching: false, is_authenticated: true }
    default:
      return state;
  }
};

export default profile;
