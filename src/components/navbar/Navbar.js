import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      {/* Top announcement bar */}
      <nav className='nav1'>
        <div>Exclusive Summer Sale!! - Upto 50% off</div>
      </nav>

      {/* Main navbar */}
      <nav>
        <div className='nav2'>
          <Link to="/" className="brand-link">
            <strong>Merakli</strong>
          </Link>

          <input type="text" placeholder="Search Products" />

          <ul className="menu">
            {/* LOGIN DROPDOWN */}
            <li className="menu-item dropdown-parent">
              <button className="nav-btn">Login</button>
              <ul className="dropdown">
                <li><Link to="/auth">New Customer? Sign Up</Link></li>
                <li><a href="#">Your Orders</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Rewards</a></li>
                <li><a href="#">Coupons</a></li>
              </ul>
            </li>

            {/* CART */}
            <li>
              <Link to="/cart">
                <button className="nav-btn">Cart</button>
              </Link>
            </li>

            {/* SETTINGS */}
            <li>
              <button className="nav-btn">Settings</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
