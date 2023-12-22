import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full p-4 bg-yellow_custon">
      <nav className="flex justify-around items-center text-blue_custom">
        <button
          onClick={ () => navigate('/') }
          className="text-2xl font-bold"
        >
          React Conference
        </button>
        <NavLink
          to="/"
          className="text-xl hover:underline
             underline-offset-4"
        >
          Go back to the website
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
