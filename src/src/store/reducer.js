import { combineReducers } from 'redux';
import ghUsersReducer from './ghUsers/ghUsersReducer';


export default combineReducers({ ghUsers: ghUsersReducer });
