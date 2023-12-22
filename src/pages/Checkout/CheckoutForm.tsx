import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CheckoutInput from './CheckoutInput';

function CheckoutForm() {
  const [formData, setFormData] = useState({ lastName: '', firstName: '', email: '' });
  const { currency } = useParams();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const price = currency === 'us' ? 30 : 150;
  const currentCurrency = currency === 'us' ? '$' : 'R$';

  const handlePlusMinus = (type: string) => {
    if (type === 'plus') {
      setAmount((prev) => prev + 1);
    } else if (type === 'minus') {
      setAmount((prev) => prev - 1);
    }
  };

  const handleChange = ({ target: { id, value } }:
  React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="bg-gradient-to-b from-yellow_custon from-40% to-pink_custon to-100%
    text-blue_custom h-screen py-28 px-36"
    >
      <h2 className="text-4xl text-center text-blue_custom">Checkout</h2>
      <div className="flex gap-8 my-12 justify-center">
        <div className="flex items-center">
          <button
            onClick={ () => handlePlusMinus('minus') }
            disabled={ amount === 0 }
            className={ `${amount === 0 && 'bg-opacity-50'} py-1 px-4 rounded-full
              bg-blue_custom text-yellow_custon  text-3xl` }
          >
            -
          </button>
          <span className="p-4 ">{amount}</span>
          <button
            onClick={ () => handlePlusMinus('plus') }
            disabled={ amount === 10 }
            className={ `${amount === 10 && 'bg-opacity-50'} py-1 px-4 rounded-full
               bg-blue_custom text-yellow_custon text-3xl` }
          >
            +
          </button>
        </div>
        <div className="flex flex-col items-center text-lg">
          <span>Total price:</span>
          <span className="font-semibold">
            {currentCurrency}
            {' '}
            {amount * price}
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <CheckoutInput
          form={ formData }
          handleChange={ handleChange }
          handleSubmit={ handleSubmit }
        />
      </div>
    </div>
  );
}

export default CheckoutForm;
