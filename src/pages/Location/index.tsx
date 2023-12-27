import { useEffect } from 'react';
import BikeItau from '../../images/BikeItau.jpg';
import CardsSections from './CardsSections';
import Data from './data';

function Location() {
  // useEffect(() => {
  //   window.scroll({
  //     top: 0,
  //     behavior: 'instant',
  //   });
  // }, []);
  return (
    <div
      className="bg-gradient-to-b from-yellow_custon from-40% to-pink_custon to-100%
    h-max pb-2.5"
    >
      <div
        className="flex flex-col items-center text-center
     justify-center p-28 gap-6 text-blue_custom"
      >
        <h2 className="text-4xl">Location</h2>
        <p className="text-xl tracking-wider">
          Get ready to soak up the sun, connect with fellow developers,
          and dive deep into the world of React at our unforgettable
          conference in the heart of Rio de Janeiro&rsquo;s iconic Copacabana beach.
        </p>

        <div
          className="flex w-full h-96 items-center justify-center"
        >
          <iframe
            title="React Conference"
            scrolling="no"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Xavier%20da%20Silveira,%20112%20-%20Copacabana,%20Rio%20de%20Janeiro%20-%20RJ,%2022061-010,%20Brazil+(React%20Conference)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>

        {Data.map((element) => (
          <CardsSections
            key={ element.section }
            sectionOBJ={ element }
          />
        ))}

      </div>

    </div>
  );
}

export default Location;
