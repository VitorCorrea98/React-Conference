import { useEffect } from 'react';
import Header from './Header';
import CheckoutForm from './CheckoutForm';

function Checkout() {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <>
      <Header />

      <CheckoutForm />
    </>
  );
}

export default Checkout;
