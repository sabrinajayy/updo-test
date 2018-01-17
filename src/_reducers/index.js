import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authenticationReducer } from './authentication.reducer';
import { registrationReducer } from './registration.reducer';

const rootReducer = combineReducers({
  authenticationReducer,
  registrationReducer,
  form: formReducer
});

export default rootReducer;
