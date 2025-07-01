// src/Cart/Cart.js
import React from 'react';
import './Cart.css';
import { useCart } from './CartContext';
import Footer from '../Homepage/Footer/Footer';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
              <button className="checkout-btn">Checkout</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
