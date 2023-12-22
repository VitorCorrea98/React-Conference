import { useDispatch, useSelector } from 'react-redux';
import { ToggleModal } from '../../redux/actions';
import { RootState } from '../../types';

function ModalButton() {
  const { modalShow } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(ToggleModal(modalShow));
  };
  return (
    <button
      className="bg-pink_custon
         p-3 text-xl rounded-lg text-yellow_custon"
      onClick={ handleModal }
    >
      Buy a ticket
    </button>
  );
}

export default ModalButton;
