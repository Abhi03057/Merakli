// src/context/AuthContext.js
import React, { useContext, useState, useEffect, createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Create context
const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Optional: To prevent flicker on first load

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Hook to use in components
export const useAuth = () => useContext(AuthContext);
