import { combineReducers } from 'redux';
import { Modal as modal } from './Modal/TicketModal';
import { Form as form } from './Modal/CheckoutModal';

const rootReducer = combineReducers({ modal, form });

export default rootReducer;
