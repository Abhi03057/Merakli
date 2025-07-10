// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Slider from './Homepage/Slider/Slider';
import Categories from './Homepage/Categories/Categories';
import Offer from './Homepage/Offer/Offer';
import Offer2 from './Homepage/Offer2/Offer2';
import Footer from './Homepage/Footer/Footer';
import Ads from './Homepage/Ads/Ads';
import Cloths from './Clothing/Cloths/Cloths'; 
import Mobiles from './Mobiles/Mobiles';
import Groceries from './Groceries/Groceries';
import Electronics from './Electronics/Electronics';
import Home from './Home/Home';
import Appliances from './Appliances/Appliances';
import Cart from './Cart/Cart'; 
import Auth from './Auth/Auth';      
import Checkout from './Checkout/Checkout';          

import { CartProvider } from './Cart/CartContext'; 
import { AuthProvider } from './context/AuthContext'; // ✅ make sure this exists

function App() {
  return (
    <CartProvider>
      <AuthProvider> {/* ✅ Now wraps everything */}
        <Router>
          <Navbar />
          <Routes>
            {/* Homepage */}
            <Route path="/" element={
              <>
                <Categories />
                <Slider />
                <Offer />
                <Ads />
                <Offer2 />
                <Footer />
              </>
            } />

            {/* Category Pages */}
            <Route path="/fashion" element={<Cloths />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/grocery" element={<Groceries />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/home" element={<Home />} />
            <Route path="/appliances" element={<Appliances />} />

            {/* Auth & Cart Pages */}
            <Route path="/auth" element={<Auth />} />   
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
