import {combineReducers} from 'redux';
import stuff from './stuffReducer';

const rootReducer = combineReducers({
  stuff
});

export default rootReducer;