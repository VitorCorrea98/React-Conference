import { useEffect } from 'react';
import BuildingOffice from '../../images/svg/building-office';
import BuildingStore from '../../images/svg/building-storeFront';
import GlobeAlt from '../../images/svg/globe-alt';

function Sponsors() {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'instant',
    });
  }, []);
  return (
    <div
      className="flex flex-col items-center
    bg-gradient-to-b from-yellow_custon from-40% to-pink_custon to-100% pt-12"
    >
      <h2 className="text-4xl">Sponsors</h2>
      <div className="flex flex-col py-24 px-44 gap-24">
        <div className="flex items-center gap-12">
          <BuildingStore />
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl">Charades</h2>
            <p>
              We&rsquo;re deeply grateful for the generous support of Charades.
              Their commitment to building bridges through technology
              aligns perfectly with our vision for this React conference.
              Their contribution has been instrumental in creating a
              platform for knowledge sharing, inspiration, and connection
              within the React community. We wouldn&rsquo;t be here without
              their support, and we&rsquo;re thrilled to welcome them as key
              partners in this exciting event.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <BuildingOffice />
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl">Tames</h2>
            <p>
              A huge shoutout to Tames for fueling the
              future of React at our conference! Their dedication
              to fostering the growth and development of the
              React community is truly inspiring. They&rsquo;ve provided
              vital resources and support, ensuring a diverse
              and enriching experience for all attendees.
              Join us in expressing our gratitude for their invaluable contribution!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <GlobeAlt />
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl">Queats</h2>
            <p>
              Cheers to Queats for raising a glass to connection
              and collaboration! Their generous support has
              enabled us to bring together the brilliant minds
              of the React community, creating a space for
              meaningful networking and knowledge exchange.
              Thanks to their dedication, we can cultivate stronger
              connections and push the boundaries of what&rsquo;s
              possible with React. Let&rsquo;s raise our voices in appreciation!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
