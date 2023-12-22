// src/utils/renderWithRedux.tsx

import { legacy_createStore as createStore } from 'redux';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../../redux/reducer';

function renderWithRedux(
  component: JSX.Element,
  state: undefined = undefined,
  store = createStore(rootReducer, state),
) {
  return {
    ...render(<Provider store={ store }>{component}</Provider>),
    store,
  };
}

export default renderWithRedux;
