import { FETCH_ISSUES_FAILURE, FETCH_ISSUES_SUCCESS } from '../actions/types'

const comics = (state = { fetching: true }, action) => {
  switch (action.type) {
    case FETCH_ISSUES_FAILURE:
      return { ...state, error: action.error, fetching: false }
    case FETCH_ISSUES_SUCCESS:
      return { ...state, data: action.data, fetching: false }
    default:
      return state
  }
}


export default comics
