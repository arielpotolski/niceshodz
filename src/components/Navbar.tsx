import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/niceshodz" 
            end
            className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/who-we-are"
            className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/what-we-do"
            className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
          >
            What We Do
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/inspiration"
            className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
          >
            Inspiration
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/get-in-touch"
            className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
          >
            Get In Touch
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
