import {
  CHANGE_LABEL,
} from '../actions';

export const initialState = {
  title: 'Welcome to WeeklyTalks.Redux',
};

export default function label(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LABEL:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
}
