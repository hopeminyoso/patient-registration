import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { MenuData } from './MenuData';
import './NavbarStyles.css';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="logo">Pona Healthcare <i className="far fa-hospital"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={`nav-menu ${this.state.clicked ? "active" : ""}`}>
          {MenuData.map((item, index) => (
            <li key={index}>
              {/* Use Link for navigation */}
              <Link to={item.url} className={item.cName}>
                <i className={`fas ${item.icon}`}></i>{item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;