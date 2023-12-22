import ModalButton from '../../components/TicketModal/ModalButton';
import background from '../../images/joshua-hoehne-6M9jjeZjscE-unsplash.jpg';

function Hero() {
  return (
    <div
      className="grid grid-cols-2 h-screen "
    >
      <img src={ background } alt="" className="h-full" />
      <div
        className="flex flex-col py-8 px-2
       items-center gap-6 justify-center bg-gradient-to-r
       from-purple_custom   via-blue_custom  to-pink_custon"
      >
        <div
          className="flex flex-col gap-3 text-yellow_custon
        text-center justify-center"
        >
          <h2 className="text-center text-3xl underline underline-offset-2">
            Welcome to the React Conference
          </h2>
          <p className="text-xl tracking-wider">
            We present the React Conference, a unique experience that
            brings together the most talented and focused professionals
            in the market. Explore the website to learn about our keynote
            speakers, agenda, helpful tips, and more.
          </p>
        </div>
        <ModalButton />
      </div>
    </div>
  );
}

export default Hero;
