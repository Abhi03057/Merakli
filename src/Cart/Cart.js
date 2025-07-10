// src/Cart/Cart.js
import React, { useState } from 'react';
import './Cart.css';
import { useCart } from './CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../Homepage/Footer/Footer';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (!user) {
      // Show custom popup instead of alert
      setShowLoginPopup(true);
      return;
    }
    
    // If user is logged in, navigate to checkout page
    navigate('/checkout');
  };

  const handleLoginRedirect = () => {
    setShowLoginPopup(false);
    navigate('/auth');
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <div className="cart-page">
      <div className="cart-wrapper">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">Cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.img} alt={item.name} />
                  <div className="item-info">
                    <div className="left">
                      <h4>{item.name}</h4>
                      <div className="qty-control">
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="qty-count">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.name)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="right">
                      <p className="price">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary-right">
              <h3>Total: ₹{totalAmount.toLocaleString()}</h3>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Custom Login Popup */}
      {showLoginPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>Login Required</h3>
              <button className="popup-close" onClick={handleClosePopup}>
                ×
              </button>
            </div>
            <div className="popup-body">
              <p>Please log in to your account to proceed with checkout and complete your purchase.</p>
            </div>
            <div className="popup-footer">
              <button className="popup-btn secondary" onClick={handleClosePopup}>
                Cancel
              </button>
              <button className="popup-btn primary" onClick={handleLoginRedirect}>
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Cart;