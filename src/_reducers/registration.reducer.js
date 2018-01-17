import { userActionTypes } from '../_actions/types/user.actions';

export function registrationReducer(state = {}, action) {
  switch (action.type) {
    case userActionTypes.REGISTER_REQUEST:
      return { registering: true };
    case userActionTypes.REGISTER_SUCCESS:
      return {};
    case userActionTypes.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
