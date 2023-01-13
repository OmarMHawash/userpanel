import React from "react";
import "./LandingPageSection.scss";
const LandingPageSection = () => {
  return (
    <div className="section">
      <div className="hero-section">
        <div className="content">
          <h1 className="section-title">You Can Learn and Grow!</h1>
          <p className="section-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse culpa
            quasi asperiores deserunt modi!
          </p>
          <button className="join-btn">Join Us!</button>
        </div>
        <div className="image-wrapper">
          <img src="images/interface/hero.png" alt="hero" />
        </div>
      </div>

      <div className="element-1 row box-background" data-aos="fade-left">
        <div className="col-6 sec-data">
          <h3>
            <b>Website Design & Development</b>
          </h3>
          <p>
            Web designers help transform your brand into a visual story. We turn
            your website into an effective way to engage with your audience and
            a high-performing marketing tool for your business.
          </p>
          <div></div>
          <h5>More than just a website</h5>
          <p>
            your website design shouldn’t stop there. The best website design
            and development will make your site as beautiful as it is functional
            and easy to use.
          </p>
        </div>
        <div className="col-6 sec-graph">
          <img src="images/interface/web-devl.jpg" alt="img" />
        </div>
      </div>
      <div className="element-1 row box-2" data-aos="fade-right">
        <div className="col-6 sec-graph">
          <img src="images/interface/hosting-removebg-preview.png" alt="img" />
        </div>
        <div className="col-6 sec-data">
          <h3>
            <b>Interactive Courses</b>
          </h3>
          <p>
            Services Trusted by Thousands Don’t just take our word for it. We’re
            the web host of choice for thousands of happy customers.
          </p>
          <div></div>
          <h5>No Experience Required!</h5>
          <p>
            You don’t need to be a pro to get started. Thanks to our easy-to-use
            control panel, intuitive interface, and best hosting features, you
            can launch your website within minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageSection;

