import { useNavigate } from 'react-router-dom';
import usPayments from '../../images/USPaymentMethodsKlarna.jpg';
import brPayments from '../../images/18766583265dbc114268a99.jpg';

function PricesSections() {
  const navigate = useNavigate();
  return (
    <div className="mt-6 flex flex-col gap-12 ">
      <div className="flex flex-col gap-4">
        <p>
          Here&rsquo;s the bonus for our Brazilian crew: if you&rsquo;re
          sporting a Brazilian credit card, you can spread
          the joy across multiple installments. So, savor
          the excitement bit by bit, without draining your caipirinha fund.
        </p>
        <img src={ brPayments } alt="BR Payments" className="h-24 w-80" />
        <button
          className="button rounded-full text-black"
          onClick={ () => navigate('/checkout/br') }
        >
          Buy ticket - R$150
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          For our friends abroad, we offer all the usual
          suspects: PayPal, credit cards, you name it!
          Choose your weapon and get ready to dive deep into the React world.
        </p>
        <img src={ usPayments } alt="US Payments Methods" className="h-16 w-80" />
        <button
          className="button rounded-full text-black"
          onClick={ () => navigate('/checkout/us') }
        >
          Buy ticket - $30
        </button>
      </div>
    </div>
  );
}

export default PricesSections;
