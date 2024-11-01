import image1 from "../assets/Jackey.jpg"
import image2 from "../assets/Maarten de Nooy.jpg"
import logo from "../assets/logo.png"

const WhoWeAre = () => {
    return (
        <div className="who-we-are">
            <div className="image-container">
                <img src={image1} alt="Photographer 1" className="image1"/>
                <img src={image2} alt="Photographer 2" className="image2"/>
            </div>
            <div className="text-container">
                <img src={logo} alt="Company Logo" className="logo"/>
                <h1>Who are we?</h1>
                <p>
                    Here at Niceshodz, we strive to be the best to capture all the important moments you can imagine. 
                    As a new start-up photography company, we want to ensure all our clients that we value their stories and moments 
                    by capturing the most stunning pictures during our time together.
                </p>
            </div>
        </div>
    );
}

export default WhoWeAre;
