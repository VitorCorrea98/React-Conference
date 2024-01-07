import { useDispatch, useSelector } from 'react-redux';
import { Form, RootState } from '../../types';
import { ToggleModal } from '../../redux/actions';

type CheckoutModalProps = {
  form: Form
};

function CheckoutModal({ form }: CheckoutModalProps) {
  const { modalShow } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  if (!modalShow) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === 'close' || target.id === 'wrapper') {
      dispatch(ToggleModal(modalShow));
    }
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0  flex justify-center
       items-center"
      onClick={ handleClose }
      aria-hidden="true"
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <div className="w-[600px] flex flex-col bg-white p-4 rounded">
        <button
          className=" text-xl flex ml-auto hover:bg-pink_custon
          p-1 rounded-full z-10 -mb-8"
          id="close"
        >
          X
        </button>
        <div className="flex flex-col gap-3">
          <h2>YOU&rsquo;RE IN!!!</h2>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;
