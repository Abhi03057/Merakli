import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../Cart/CartContext';
import Footer from '../Homepage/Footer/Footer';

function Checkout() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cartItems } = useCart();
  
  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: user?.name || '',
    phone: ''
  });
  const [address, setAddress] = useState({
    line1: '',
    line2: '',
    line3: '',
    district: '',
    state: ''
  });
  const [payment, setPayment] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('error'); // 'success' or 'error'

  // Calculate total from cart items
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const showAlertMessage = (message, type = 'error') => {
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
    if (type === 'success') {
      setTimeout(() => setShowAlert(false), 4000);
    } else {
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
      showAlertMessage('Please enter only numeric characters for phone number');
      return;
    }
    setUserInfo({...userInfo, phone: value});
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\s/g, '');
    if (!/^\d*$/.test(value)) {
      showAlertMessage('Please enter only numeric characters for card number');
      return;
    }
    if (value.length <= 16) {
      const formatted = value.replace(/(.{4})/g, '$1 ').trim();
      setPayment({...payment, cardNumber: formatted});
    }
  };

  const handleExpiryChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 4) {
      const formatted = value.replace(/(.{2})/, '$1/');
      setPayment({...payment, expiry: formatted});
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
      showAlertMessage('Please enter only numeric characters for CVV');
      return;
    }
    if (value.length <= 3) {
      setPayment({...payment, cvv: value});
    }
  };

  const isStepComplete = (step) => {
    switch (step) {
      case 1:
        return userInfo.name && userInfo.phone.length >= 10;
      case 2:
        return address.line1 && address.district && address.state;
      case 3:
        return true; // Order summary is always complete
      case 4:
        return payment.cardNumber.replace(/\s/g, '').length === 16 && 
               payment.expiry.length === 5 && 
               payment.cvv.length === 3;
      default:
        return false;
    }
  };

  const handleNextStep = () => {
    if (isStepComplete(currentStep) && currentStep < 4) {
      // Mark current step as completed
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCompleteOrder = () => {
    if (isStepComplete(4)) {
      // Mark step 4 as completed
      setCompletedSteps(prev => [...prev, 4]);
      // Show success message
      showAlertMessage('🎉 Order Confirmed! Your order has been placed successfully.', 'success');
      
      // Optional: Clear cart after successful order
      // clearCart(); // Uncomment if you have this function in your cart context
      
      // Optional: Navigate to order confirmation page after delay
      // setTimeout(() => {
      //   navigate('/order-confirmation');
      // }, 3000);
    }
  };

  // Handle empty cart
  if (cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <div className="empty-checkout">
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart to proceed with checkout.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return <div>Redirecting to authentication...</div>;
  }

  return (
    <div className="checkout-container">
      {/* Custom navbar for checkout - no duplicate */}
      <div className="navbar">
        Secure Checkout
      </div>
      
      {showAlert && (
        <div className="alert-popup">
          <div className={`alert-content ${alertType}`}>
            <span className="alert-message">{alertMessage}</span>
            <button className="alert-close" onClick={() => setShowAlert(false)}>
              {alertType === 'success' ? 'OK' : 'Close'}
            </button>
          </div>
        </div>
      )}

      <div className="checkout-wrapper">
        <div className="checkout-main">
          <div className="checkout-header">
            <h2>Checkout</h2>
            <div className="step-indicator">
              {[1, 2, 3, 4].map((step) => (
                <div 
                  key={step} 
                  className={`step ${currentStep === step ? 'active' : ''} ${completedSteps.includes(step) ? 'complete' : ''}`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: User Info */}
          <div className={`checkout-step ${currentStep >= 1 ? 'visible' : ''}`}>
            <div className="step-header" onClick={() => currentStep > 1 && setCurrentStep(1)}>
              <h3>1. User Information</h3>
              {currentStep > 1 && <span className="step-toggle">▼</span>}
            </div>
            {currentStep === 1 && (
              <div className="step-content">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={userInfo.phone}
                    onChange={handlePhoneChange}
                    placeholder="Enter 10-digit phone number"
                    maxLength="10"
                  />
                </div>
                <div className="step-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={handleNextStep}
                    disabled={!isStepComplete(1)}
                  >
                    Continue to Address
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Step 2: Address */}
          {currentStep >= 2 && (
            <div className="checkout-step">
              <div className="step-header" onClick={() => currentStep > 2 && setCurrentStep(2)}>
                <h3>2. Delivery Address</h3>
                {currentStep > 2 && <span className="step-toggle">▼</span>}
              </div>
              {currentStep === 2 && (
                <div className="step-content">
                  <div className="form-group">
                    <label>Address Line 1</label>
                    <input
                      type="text"
                      value={address.line1}
                      onChange={(e) => setAddress({...address, line1: e.target.value})}
                      placeholder="House no., Street name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Address Line 2</label>
                    <input
                      type="text"
                      value={address.line2}
                      onChange={(e) => setAddress({...address, line2: e.target.value})}
                      placeholder="Locality, Area"
                    />
                  </div>
                  <div className="form-group">
                    <label>Address Line 3</label>
                    <input
                      type="text"
                      value={address.line3}
                      onChange={(e) => setAddress({...address, line3: e.target.value})}
                      placeholder="Landmark (optional)"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>District</label>
                      <input
                        type="text"
                        value={address.district}
                        onChange={(e) => setAddress({...address, district: e.target.value})}
                        placeholder="District"
                      />
                    </div>
                    <div className="form-group">
                      <label>State</label>
                      <input
                        type="text"
                        value={address.state}
                        onChange={(e) => setAddress({...address, state: e.target.value})}
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div className="step-actions">
                    <button className="btn btn-secondary" onClick={handlePrevStep}>
                      Back
                    </button>
                    <button 
                      className="btn btn-primary"
                      onClick={handleNextStep}
                      disabled={!isStepComplete(2)}
                    >
                      Continue to Order Summary
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Order Summary */}
          {currentStep >= 3 && (
            <div className="checkout-step">
              <div className="step-header" onClick={() => currentStep > 3 && setCurrentStep(3)}>
                <h3>3. Order Summary</h3>
                {currentStep > 3 && <span className="step-toggle">▼</span>}
              </div>
              {currentStep === 3 && (
                <div className="step-content">
                  <div className="order-items">
                    {cartItems.map((item, index) => (
                      <div key={index} className="order-item">
                        <div className="item-image">
                          {item.img ? (
                            <img src={item.img} alt={item.name} />
                          ) : (
                            <div className="placeholder-icon">📦</div>
                          )}
                        </div>
                        <div className="item-details">
                          <h4>{item.name}</h4>
                          <p className="item-price">₹{item.price}</p>
                          <p className="item-quantity">Quantity: {item.quantity}</p>
                        </div>
                        <div className="item-total">
                          <div className="item-total-price">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="step-actions">
                    <button className="btn btn-secondary" onClick={handlePrevStep}>
                      Back
                    </button>
                    <button 
                      className="btn btn-primary"
                      onClick={handleNextStep}
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep >= 4 && (
            <div className="checkout-step">
              <div className="step-header">
                <h3>4. Payment Details</h3>
              </div>
              <div className="step-content">
                <div className="payment-section">
                  <h4>Card Payment</h4>
                  <div className="form-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      value={payment.cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        value={payment.expiry}
                        onChange={handleExpiryChange}
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input
                        type="text"
                        value={payment.cvv}
                        onChange={handleCvvChange}
                        placeholder="123"
                        maxLength="3"
                      />
                    </div>
                  </div>
                </div>
                <div className="step-actions">
                  <button className="btn btn-secondary" onClick={handlePrevStep}>
                    Back
                  </button>
                  <button 
                    className="btn btn-primary btn-large"
                    onClick={handleCompleteOrder}
                    disabled={!isStepComplete(4)}
                  >
                    Complete Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Price Details Sidebar */}
        <div className="price-details">
          <div className="price-box">
            <h3>Price Details</h3>
            <div className="price-row">
              <span>Price ({totalItems} items)</span>
              <span>₹{totalAmount.toLocaleString()}</span>
            </div>
            <div className="price-row">
              <span>Delivery Charges</span>
              <span className="free">FREE</span>
            </div>
            <div className="price-row">
              <span>Packaging Fee</span>
              <span>₹29</span>
            </div>
            <div className="price-row total">
              <span>Total Payable</span>
              <span>₹{(totalAmount + 29).toLocaleString()}</span>
            </div>
            <div className="savings">
              <span>You will save ₹{Math.floor(totalAmount * 0.15)} on this order</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;