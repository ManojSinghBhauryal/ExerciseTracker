import React, { Component } from "react";
import logo from "../fitness.svg";
import "./App.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <div className='navbar'>
          <div className='title'>
            <div className='logo'>
              <img src={logo} className='App-logo' alt='logo' />
            </div>
            <div>
              <Link to='/' className='titleName'>
                E-Tracker
              </Link>
            </div>
          </div>

          <div className='linkTo'>
            <div>
              <Link to='/' className='subLink1'>
                Exercise
              </Link>
            </div>
            <div>
              <Link to='/create' className='subLink2'>
                Create Exercise
              </Link>
            </div>
            <div>
              <Link to='/user' className='subLink3'>
                Create user
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

export default Navbar;
