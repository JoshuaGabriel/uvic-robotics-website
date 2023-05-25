import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/UVic-Robotics-Logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="bg-white py-5">
        <ul className="flex flex-row justify-between items-center px-20">
          
          <div>
            <Link to="/">
              <img src={logo} alt="UVic Robotics Logo" className="h-25 w-60 pe-5"/>
            </Link>
          </div>
          
          <div className='text-base font-semibold leading-6 text-gray-900'>
            <Link to="/">
              Home
            </Link>
          </div>
          
          <div className="text-base font-semibold leading-6 text-gray-900">
            <Link to="rover">
              Rover
            </Link>
          </div>
          
          <div className="text-base font-semibold leading-6 text-gray-900">
            <Link to="contact">
              Contact
            </Link>
          </div>
          
          <div className="text-base font-semibold leading-6 text-gray-900">
            <Link to="MeetTheTeam">
              Team
            </Link>
          </div>
          
          <div className="text-base font-semibold leading-6 text-gray-900">
            <Link to="sponsors">
              Sponsors
            </Link>
          </div>
          
          <div className="text-base font-semibold leading-6 text-gray-900">
            <Link to="blog">
              Blogs
            </Link>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
