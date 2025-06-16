// src/Auth/Auth.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

import './Auth.css';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleMode = () => setIsSignUp(!isSignUp);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        // Firebase Email/Password Sign-Up
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up:', userCredential.user);
      } else {
        // Firebase Email/Password Sign-In
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
      }

      navigate('/'); // redirect to homepage
    } catch (error) {
      console.error('Auth error:', error.message);
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google sign-in success:', result.user);
      alert('Logged in with Google: ' + result.user.email);
      navigate('/'); // redirect to homepage
    } catch (error) {
      console.error('Google sign-in error:', error.message);
      alert('Google sign-in failed: ' + error.message);
    }
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

        <button className="google-btn" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>

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
