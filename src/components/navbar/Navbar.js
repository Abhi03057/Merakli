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
          {/* ✅ Homepage Link */}
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

          {/* ✅ Cart Link */}
          <Link to="/cart">
            <button className="nav-btn">Cart</button>
          </Link>

          {/* ✅ Optional: Settings Link */}
          <Link to="/settings">
            <button className="nav-btn">Settings</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
