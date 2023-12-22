import SpeakerCard from '../../components/SpeakerCard';
import data from '../../helper/data';

function SpeakersSection() {
  return (
    <div className="bg-gradient-to-b from-purple_custom from-0% to-pink_custon to-70%">
      <div className="flex flex-col py-24 gap-24">
        <h3 className="text-center text-4xl">Speakers</h3>
        <div
          className="grid grid-cols-3 place-items-center gap-y-24"
        >
          {data.map((speaker) => (
            <SpeakerCard key={ speaker.id } speaker={ speaker } />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpeakersSection;
