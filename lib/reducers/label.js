var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { CHANGE_LABEL } from '../actions';

export const initialState = {
  title: 'Welcome to WeeklyTalks.Redux'
};

export default function label() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments[1];

  switch (action.type) {
    case CHANGE_LABEL:
      return _extends({}, state, {
        title: action.payload
      });
    default:
      return state;
  }
}