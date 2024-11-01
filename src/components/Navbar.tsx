import { Navigate, NavLink, Route } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
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
      <Route path="*" element={<Navigate to="/" replace />} />
    </nav>
  );
};

export default Navbar;
