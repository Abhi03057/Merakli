import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link from React Router
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className='nav1'>
        <div>Exclusive Summer Sale!! - Upto 50% off</div>
      </nav>

      <nav>
        <div className='nav2'>
          {/* ✅ Wrap Merakli in a <Link> to go to homepage */}
          <Link to="/" className="brand-link">
            <strong>Merakli</strong>
          </Link>

          <input type="text" placeholder='Search Products' />

          <ul className="menu">
            <li className="menu-item dropdown-parent">
              <button className="nav-btn">Login</button>
              <ul className="dropdown">
                <li>New Customer? Sign Up</li>
                <li>Your Orders</li>
                <li>Profile</li>
                <li>Wishlist</li>
                <li>Rewards</li>
                <li>Coupons</li>
              </ul>
            </li>
          </ul>

          <a href="#"><button className="nav-btn">Cart</button></a>
          <a href="#"><button className="nav-btn">Settings</button></a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
