// src/Cart/Cart.js
import React from 'react';
import './Cart.css';
import { useCart } from './CartContext';

function Cart() {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
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
                  <p className="price">₹{item.price.toLocaleString()}</p>
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
  );
}

export default Cart;
