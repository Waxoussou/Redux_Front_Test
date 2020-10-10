import { combineReducers } from 'redux';
import langageReducer from './langageReducer';

export default combineReducers({
    language: langageReducer
});