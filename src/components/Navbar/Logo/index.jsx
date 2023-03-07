import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/Icons/logo.png';

const Logo = () => {
  return (
    <NavLink to="/" className="block py-1">
      <img src={logo} alt="logo" className="h-[92px] w-[92px]" />
    </NavLink>
  );
};

export default Logo;
