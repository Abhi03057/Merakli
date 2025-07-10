import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';

function Navbar() {
  const { user } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        setShowDropdown(false); // Close dropdown after logout
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            {/* LOGIN/USERNAME DROPDOWN */}
            <li className="dropdown-parent" ref={dropdownRef}>
              {user ? (
                <>
                  <button className="username-btn" onClick={toggleDropdown}>
                    {user.displayName || user.email.split('@')[0]}
                  </button>
                  <ul className={`dropdown ${showDropdown ? 'show' : ''}`}>
                    <li><Link to="/cart" onClick={() => setShowDropdown(false)}>Your Orders</Link></li>
                    <li><button onClick={handleLogout} className="dropdown-link">Logout</button></li>
                  </ul>
                </>
              ) : (
                <>
                  <button className="nav-btn" onClick={toggleDropdown}>
                    <i className="fa-solid fa-user icon-style"></i>
                  </button>
                  <ul className={`dropdown ${showDropdown ? 'show' : ''}`}>
                    <li><Link to="/auth" onClick={() => setShowDropdown(false)}>New Customer? Sign Up</Link></li>
                    <li><Link to="/cart" onClick={() => setShowDropdown(false)}>Your Orders</Link></li>
                    <li><button className="dropdown-link" onClick={() => setShowDropdown(false)}>Profile</button></li>
                    <li><button className="dropdown-link" onClick={() => setShowDropdown(false)}>Wishlist</button></li>
                    <li><button className="dropdown-link" onClick={() => setShowDropdown(false)}>Rewards</button></li>
                    <li><button className="dropdown-link" onClick={() => setShowDropdown(false)}>Coupons</button></li>
                  </ul>
                </>
              )}
            </li>

            {/* CART */}
            <li>
              <Link to="/cart">
                <button className="nav-btn">
                  <i className="fa-solid fa-cart-shopping icon-style"></i>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;