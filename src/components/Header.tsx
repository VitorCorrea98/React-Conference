import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full p-4 bg-yellow_custon">
      <div className="flex justify-around items-center text-blue_custom">
        <button
          onClick={ () => navigate('/') }
          className="text-2xl font-bold"
        >
          React Conference
        </button>
        <nav>
          <ul className="flex gap-4">
            <NavLink
              to="/"
              className="text-xl hover:underline
              underline-offset-4"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-xl hover:underline
             underline-offset-4"
            >
              About
            </NavLink>
            <NavLink
              to="/sponsors"
              className="text-xl hover:underline
             underline-offset-4 "
            >
              Sponsors
            </NavLink>
            <NavLink
              to="/location"
              className="text-xl hover:underline
             underline-offset-4 "
            >
              Location
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
