import { combineReducers } from 'redux';
import { authReducer } from './reducers/user';
import { newsReducer} from './reducers/news';

export const reducer = combineReducers({
  authReducer,
  newsReducer
});