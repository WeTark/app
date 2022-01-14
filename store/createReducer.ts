import { combineReducers } from 'redux';
import userReducer from './reducers/UserReducer';

export function createReducer(injectedReducers = {}) {
    return combineReducers({
      ...injectedReducers,
      userData: userReducer,
    });
  }