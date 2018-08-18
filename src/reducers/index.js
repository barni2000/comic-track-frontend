import { combineReducers } from 'redux'

import comics from './comics'
import issues from './issues'
import publishers from './publishers'
import profile from './profile'

const rootReducer = combineReducers({
  comics,
  issues,
  publishers,
  profile,
})

export default rootReducer
