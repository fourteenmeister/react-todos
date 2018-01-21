import { combineReducers } from 'redux';

import todos from './todos';
import fetching from './fetching';

export default combineReducers({
  fetching,
  todos,
});