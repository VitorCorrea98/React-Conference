import { AnyAction } from 'redux';
import { GET_FORM } from '../../actions';

export const FORM_INITIAL_STATE = {
  email: '',
  lastName: '',
  firstName: '',
};

export const Form = (state = FORM_INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case GET_FORM: return {
      email: action.payload.email,
      lastName: action.payload.lastName,
      firstName: action.payload.firstName,
    };

    default: return state;
  }
};
