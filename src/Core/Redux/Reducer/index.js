import { combineReducers } from 'redux';
import { advarReducer } from './advarReducer';
import { userReducer } from './userReducer';

export const reducer = combineReducers({
  user: userReducer,
  advar: advarReducer,
});
