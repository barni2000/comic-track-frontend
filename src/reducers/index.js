import { combineReducers } from 'redux';

import comics from './comics';
import publishers from './publishers';
import profile from './profile';

const rootReducer = combineReducers({
  comics,
  publishers,
  profile
});

export default rootReducer;
