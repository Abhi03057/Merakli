import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';

function Navbar() {
  const { user } = useAuth();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

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
           <li className="dropdown-parent">
  {user ? (
    <>
      <button className="username-btn">
        {user.displayName || user.email.split('@')[0]}
      </button>
      <ul className="dropdown">
        <li><Link to="/cart">Your Orders</Link></li>
        <li><button onClick={handleLogout} className="dropdown-link">Logout</button></li>
      </ul>
    </>
  ) : (
    <>
      <button className="nav-btn">
        <i className="fa-solid fa-user icon-style"></i>
      </button>
      <ul className="dropdown">
        <li><Link to="/auth">New Customer? Sign Up</Link></li>
        <li><Link to="/cart">Your Orders</Link></li>
        <li><button className="dropdown-link">Profile</button></li>
        <li><button className="dropdown-link">Wishlist</button></li>
        <li><button className="dropdown-link">Rewards</button></li>
        <li><button className="dropdown-link">Coupons</button></li>
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
