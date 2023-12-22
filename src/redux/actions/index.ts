import { Form } from '../../types';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const GET_FORM = 'GET_FORM';

export const ToggleModal = (modalState: boolean) => ({
  type: TOGGLE_MODAL,
  payload: modalState,
});

export const GetForm = (form: Form) => ({
  type: GET_FORM,
  payload: form,
});
