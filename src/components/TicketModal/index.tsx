import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types';
import { ToggleModal } from '../../redux/actions';
import PricesSections from './PricesSections';

function TicketModal() {
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
      className="fixed inset-0 flex justify-center
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
          <p className="tracking-widest">
            Get ready to level up your React skills
            at the ultimate conference for developers, enthusiasts, and visionaries!
          </p>
          <p className="text-blue_custom text-sm">
            This is just a demo you won&rsquo;t be buying any ticket or spending money.
          </p>
        </div>
        <PricesSections />
      </div>
    </div>
  );
}

export default TicketModal;
