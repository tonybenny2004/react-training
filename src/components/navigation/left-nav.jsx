import React from 'react';
import { Link } from 'react-router-dom';


const LeftNav = () => (
  <ul>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/about'}>About Us</Link></li>
    <li><Link to={'/products'}>Products</Link></li>
    <li><Link to={'/movies'}>Movies</Link></li>
  </ul>
);

export default LeftNav;
