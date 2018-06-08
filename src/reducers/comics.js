import { FETCH_COMICS_FAILURE, FETCH_COMICS_SUCCESS, FETCH_COMICS_REQUEST } from '../actions/types';

const comics = (state = { fetching: true }, action) => {
  switch(action.type) {
    case FETCH_COMICS_FAILURE:
      return { ...state, error: action.error, fetching: false }
    case FETCH_COMICS_SUCCESS:
      return { ...state, data: action.data, fetching: false }
    default:
      return state;
  }
};



export default comics;
