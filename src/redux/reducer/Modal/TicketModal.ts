import { AnyAction } from 'redux';
import { TOGGLE_MODAL } from '../../actions';

export const MODAL_INITIAL_STATE = {
  modalShow: false,
};

export const Modal = (state = MODAL_INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_MODAL: return {
      ...state,
      modalShow: !action.payload,
    };

    default: return state;
  }
};
