const WhatWeDo = () => {
    return (
      <div className="what-we-do">
        <h2>Our specialties</h2>
        <div className="services">
          <div className="service-card">
            <div className="icon">
              {/* Replace the path with the actual path to your icon */}
              <img src="/assets/icons/wedding.svg" alt="Wedding Photography" />
            </div>
            <h3>Wedding Photography</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacinia turpis, auctor rutrum dolor.</p>
            <button>Book now</button>
          </div>
          <div className="service-card">
            <div className="icon">
              {/* Replace the path with the actual path to your icon */}
              <img src="/assets/icons/sports.svg" alt="Sports Photography" />
            </div>
            <h3>Sports Photography</h3>
            <p>Nullam vel sem diam. Ut tincidunt leo odio. Proin facilisis sem ac est rhoncus auctor.</p>
            <button>Book now</button>
          </div>
          <div className="service-card">
            <div className="icon">
              {/* Replace the path with the actual path to your icon */}
              <img src="/assets/icons/event.svg" alt="Event Photography" />
            </div>
            <h3>Event Photography</h3>
            <p>Praesent viverra sagittis elit, non mattis magna tempor et. Sed id nulla sed.</p>
            <button>Book now</button>
          </div>
        </div>
      </div>
    );
  };

export default WhatWeDo;
