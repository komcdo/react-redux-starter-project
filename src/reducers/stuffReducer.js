import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF} from '../actions/allActions';

export default function stuff(state = initialState.stuff, action) {
  let newState;
  switch (action.type) {
    case FETCH_STUFF:
      console.log('FETCH_STUFF Action')
      return action;
    case RECEIVE_STUFF:
      newState = action.stuff;
      console.log('RECEIVE_STUFF Action')
      return newState;
    default:
      return state;
  }
}