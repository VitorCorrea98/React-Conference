import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ModalButton from '../../components/TicketModal/ModalButton';
import TicketModal from '../../components/TicketModal';
import { ToggleModal } from '../../redux/actions';

function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'instant',
    });
    dispatch(ToggleModal(true));
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-yellow_custon from-40% to-pink_custon to-100%
      h-max pb-28"
    >
      <div
        className="flex flex-col items-center text-center
       justify-center p-28 gap-6 text-blue_custom"
      >
        <h2 className="text-4xl">About Us</h2>
        <p className="text-2xl tracking-wide">
          Our conference is the place where leaders and
          innovators come together to share knowledge,
          inspire each other, and network. We are proud to
          host some of the most well-known and influential
          voices in the field.
        </p>
        <p className="text-2xl tracking-wide">
          This year&rsquo;s schedule is more packed than ever,
          with exceptional keynotes, talks, and off-site
          activities. Registration is now open. Book your
          ticket today!
        </p>
        <ModalButton />
      </div>
      <TicketModal />
    </div>
  );
}

export default About;
