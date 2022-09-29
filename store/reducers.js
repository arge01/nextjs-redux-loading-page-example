import { combineReducers } from 'redux';

import episode from '../services/episode/reduecers';

// COMBINED REDUCERS
const reducers = { episode };

export default combineReducers(reducers);
