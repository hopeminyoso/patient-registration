import React from "react";
import "./HomeStyles.css";

function Home() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="hospital-name-custom">Welcome to Pona Healthcare</h1>
        <p className="hospital-description-custom">Your Wellness, Our Commitment</p>
        <div className="hospital-info-custom">
          <p>
            Pona Healthcare is a leading healthcare institution dedicated to
            providing top-quality medical services to our community. With a team
            of highly skilled doctors and state-of-the-art facilities, we are
            committed to your well-being.
          </p>
        </div>

        <div className="services">
          <div className="service-container">
            <div className="service">
              <i className="fas fa-syringe service-icon"></i>
              <h3>Surgical Services</h3>
              <p>
                We offer a wide range of surgical procedures performed by
                experienced surgeons to ensure your well-being.
              </p>
            </div>
            <div className="service">
              <i className="fas fa-medkit service-icon"></i>
              <h3>Medical Services</h3>
              <p>
                Our medical services are designed to diagnose and treat various
                medical conditions, providing you with the best care possible.
              </p>
            </div>
            <div className="service">
              <i className="fas fa-pills service-icon"></i>
              <h3>Pharmaceutical Services</h3>
              <p>
                We provide high-quality pharmaceutical products to meet your
                medication needs, ensuring your health and safety.
              </p>
            </div>
            <div className="service">
              <i className="fas fa-microscope service-icon"></i>
              <h3>Diagnostics Services</h3>
              <p>
                Our state-of-the-art diagnostic facilities are equipped to
                accurately identify and assess your health issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



