import React from 'react';
import { RiMenuline, RiCloseLin } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

//BEM -> BLOCK ELEMENT MODIFIER

const navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">

        <img src={logo} alt="logo" />


        </div>
      </div>
    </div>
  )
}

export default navbar
