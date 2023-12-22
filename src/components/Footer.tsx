import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-pink_custon flex justify-around text-xl py-4 items-center">
      <p>
        © 2023 — React Conference, INC.
      </p>
      <ul className="flex gap-4 text-sm ">
        <span className="hover:underline underline-offset-4">Twitter</span>
        <span className="hover:underline underline-offset-4">Facebook</span>
        <span className="hover:underline underline-offset-4">Instagram</span>
        <span className="hover:underline underline-offset-4">Linkedin</span>

      </ul>
      <p>
        #REACT-CONFERENCE2023
      </p>
    </footer>
  );
}

export default Footer;
