import { Link } from "react-router-dom";
import image from "../assets/home_page_image.jpg"
import logo from "../assets/logo.png"

const Home = () => {
    return (
        <section className="home">
          <div className="home-content">
            <div className="text-content">
                <div className="logo">
                    <img src={logo} alt="NiceShodz Logo" className="logo" />
                </div>
                <div className="home-txt">
                    <h1>Here to capturing those nice moments...</h1>
                </div>
                <div className="portfolio-button">
                    <Link to="/inspiration">
                        <button className="cta-button">View our portfolio</button>
                    </Link>
                    
                </div>
            </div>
            <div className="image-content">
              <img src={image} alt="Home" className="home-image" />
            </div>
          </div>
        </section>
    );
};

export default Home;
