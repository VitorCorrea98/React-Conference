export type Modal = {
  modalShow: boolean
};

export type Form = {
  lastName: string,
  firstName: string,
  email: string
};

export const FormInitialValue = {
  lastName: '',
  firstName: '',
  email: '',
};

export type RootState = {
  modal: Modal
  form: Form
};
