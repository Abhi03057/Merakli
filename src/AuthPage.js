import React, { useState } from 'react';
import './Auth.css';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ✅ Replace your old handleSubmit with this
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(isSignup ? "Signing up:" : "Signing in:", { email, password });

    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("✅ User created:", userCredential.user);
        alert("User created successfully!");
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("✅ User signed in:", userCredential.user);
        alert("Logged in successfully!");
      }
    } catch (error) {
      console.error("❌ Firebase error:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>{isSignup ? 'Sign Up' : 'Sign In'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-btn">
            {isSignup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <div className="toggle-text">
          {isSignup ? (
            <>
              Already have an account?{' '}
              <span onClick={() => setIsSignup(false)}>Sign In</span>
            </>
          ) : (
            <>
              New user?{' '}
              <span onClick={() => setIsSignup(true)}>Sign Up</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
