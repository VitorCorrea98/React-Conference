import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import CheckoutForm from './CheckoutForm';
import { ToggleModal } from '../../redux/actions';

function Checkout() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'instant',
    });
    dispatch(ToggleModal(true));
  }, []);

  return (
    <>
      <Header />
      <CheckoutForm />
    </>
  );
}

export default Checkout;
