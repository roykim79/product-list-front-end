import _ from 'lodash';
import { SET_SORT_METHOD, SET_CATEGORY } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case SET_SORT_METHOD:
      // return Object.assign({}, state.params, action.payload);
      return { ...state, [action.payload.price]: action.payload};
    case SET_CATEGORY:
      return { ...state, [action.payload.category]: action.payload};
    default:
      return state;
  }
}