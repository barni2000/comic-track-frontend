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
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../actions/types'

const INITIAL_STATE = {
  fetching: true,
  is_authenticated: false,
  data: { read: [], wishlsit: [] },
}

const profile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_READ_FAILURE:
    case REMOVE_READ_FAILURE:
    case ADD_WISH_FAILURE:
    case REMOVE_WISH_FAILURE:
      return { ...state, error: action.error, fetching: false }
    case LOGIN_FAILURE:
    case FETCH_PROFILE_FAILURE:
      return {
        ...state, error: action.error, fetching: false, is_authenticated: false,
      }
    case ADD_READ_SUCCESS:
    case REMOVE_READ_SUCCESS:
    case ADD_WISH_SUCCESS:
    case REMOVE_WISH_SUCCESS:
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state, data: action.data, fetching: false, is_authenticated: true,
      }
    case LOGIN_SUCCESS:
      return { ...state, is_authenticated: true, fetching: true }
    case LOGOUT_SUCCESS:
      return { is_authenticated: false }
    default:
      return state
  }
}

export default profile
