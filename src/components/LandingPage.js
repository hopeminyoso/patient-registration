import React from 'react';
import PatientRegistrationForm from './PatientRegistrationForm';
import VisitPage from './VisitPage';
import PatientListing from './PatientListing';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function LandingPage() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/visit">Visit Page</Link>
            </li>
            <li>
              <Link to="/listing">Patient Listing</Link>
            </li>
          </ul>
        </nav>

        <Route path="/registration" component={PatientRegistrationForm} />
        <Route path="/visit" component={VisitPage} />
        <Route path="/listing" component={PatientListing} />
      </div>
    </Router>
  );
}

export default LandingPage;

