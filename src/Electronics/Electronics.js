import React, { useState } from "react";
import "../Clothing/Cloths/Cloths.css";

import { useCart } from "../Cart/CartContext";
import Footer from "../Homepage/Footer/Footer";

function Electronics() {
  const [alert, setAlert] = useState({ message: "", visible: false });
  const [sortOption, setSortOption] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  const { addToCart } = useCart();

  const showAlert = (message) => {
    setAlert({ message, visible: true });
    setTimeout(() => setAlert({ message: "", visible: false }), 3000);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showAlert(`"${product.name}" added to cart!`);
  };

  const handleAddToWishlist = (name) => {
    showAlert(`"${name}" added to wishlist!`);
  };

  const products = [
    {
      img: "https://images.frandroid.com/wp-content/uploads/2023/02/apple-macbook-pro-16-m2-max-test-4-scaled.jpg",
      name: "Apple MacBook Pro 16”",
      price: 239900,
      brand: "Apple",
    },
    {
      img: "https://images.visunextgroup.com/images/D/original/1/1000026372/de/dell/dell-ultrasharp-u2723qe-27-4k-monitor.jpg",
      name: "Dell 27'' Monitor",
      price: 18499,
      brand: "Dell",
    },
    {
      img: "http://cdn.shopify.com/s/files/1/0024/9803/5810/products/623346-Product-0-I-638126569045796477_1024x1024.jpg",
      name: "Sony Wireless Earphones",
      price: 6599,
      brand: "Sony",
    },
    {
      img: "https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2022/09/LI-Apple-Watch-SE-(2nd-gen)-1-1.png",
      name: "Apple Watch SE",
      price: 29900,
      brand: "Apple",
    },
    {
      img: "https://robots.net/wp-content/uploads/2023/12/8-best-hp-pavilion-15-gaming-laptop-for-2023-1701762805.jpg",
      name: "HP Pavilion Gaming Laptop",
      price: 64999,
      brand: "HP",
    },
    {
      img: "https://www.techadvisor.com/wp-content/uploads/2022/08/Samsung-Galaxy-Watch-5-Pro_review_11.jpg?quality=50&strip=all",
      name: "Samsung Galaxy Watch 5",
      price: 27999,
      brand: "Samsung",
    },
  ];

  const brands = [...new Set(products.map((p) => p.brand))];

  let filteredProducts = [...products];

  if (brandFilter) {
    filteredProducts = filteredProducts.filter((p) => p.brand === brandFilter);
  }

  if (sortOption === "low-to-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-to-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="cloths-wrapper">
        <div className="cloths-header-with-controls">
          <div className="cloths-header">
            <h1>Electronics</h1>
            <p>Top gadgets and devices for your digital life!</p>
          </div>
          <div className="dropdown-controls">
            <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
              <option value="">Sort By</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>

            <select onChange={(e) => setBrandFilter(e.target.value)} value={brandFilter}>
              <option value="">All Brands</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="products-container">
          {filteredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">₹{product.price.toLocaleString()}</p>
              <div className="buttons">
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
                <button className="wishlist-btn" onClick={() => handleAddToWishlist(product.name)}>
                  ❤
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`custom-alert ${alert.visible ? "show" : ""}`}>
          {alert.message}
        </div>
      </div>

      <div className="footer-fullwidth">
        <Footer />
      </div>
    </>
  );
}

export default Electronics;
