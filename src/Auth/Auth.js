// src/Auth/Auth.js
import React, { useState } from 'react';
import './Auth.css'; // You'll define this next
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleMode = () => setIsSignUp(!isSignUp);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Sign Up logic
      console.log('Signing up:', { email, password });
    } else {
      // Sign In logic
      console.log('Signing in:', { email, password });
    }

    // Navigate to home after success
    navigate('/');
  };

  return (
    <div className="cloths-wrapper auth-wrapper">
      <div className="auth-box">
        <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="nav-btn auth-btn" type="submit">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <p className="toggle-text">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={toggleMode}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;
