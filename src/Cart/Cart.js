// src/Cart/Cart.js
import React from 'react';
import './Cart.css';
import { useCart } from './CartContext';
import Footer from '../Homepage/Footer/Footer'; // ✅ Importing Footer

function Cart() {
  const { cartItems, removeFromCart } = useCart();

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
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p className="price">
                      ₹{item.price.toLocaleString()} × {item.quantity} = ₹
                      {(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3>Total: ₹{totalAmount.toLocaleString()}</h3>
              <button className="checkout-btn">Checkout</button>
            </div>
          </>
        )}
      </div>

      {/* ✅ Footer in separate container below */}
      <Footer />
    </div>
  );
}

export default Cart;
