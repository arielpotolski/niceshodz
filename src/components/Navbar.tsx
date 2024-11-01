import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/who-we-are">Who We Are</Link></li>
                <li><Link to="/what-we-do">What We Do</Link></li>
                <li><Link to="/inspiration">Inspiration</Link></li>
                <li><Link to="/get-in-touch">Get In Touch</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;