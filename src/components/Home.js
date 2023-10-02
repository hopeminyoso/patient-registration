import React from "react";
import "./HomeStyles.css";

function Home() {
  return (
    <div className="hero">
      <div className="overlay"></div> 
      <div className="content">
        <h1 className="hospital-name">Welcome to Pona Healthcare</h1>
        <p className="hospital-description">
          Your Wellness, Our Commitment
        </p>
        <div className="hospital-info">
          <p>
            Pona Healthcare is a leading healthcare institution dedicated to
            providing top-quality medical services to our community. With a team
            of highly skilled doctors and state-of-the-art facilities, we are
            committed to your well-being.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
