import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TicketModal from '../../components/TicketModal';
import Hero from './Hero';
import SpeakersSection from './SpeakersSection';
import { ToggleModal } from '../../redux/actions';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'instant',
    });
    dispatch(ToggleModal(true));
  }, []);
  return (
    <div>
      <Hero />
      <SpeakersSection />
      <TicketModal />
    </div>
  );
}

export default Home;
