export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const ToggleModal = (modalState: boolean) => ({
  type: TOGGLE_MODAL,
  payload: modalState,
});
