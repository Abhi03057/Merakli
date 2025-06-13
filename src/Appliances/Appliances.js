import React, { useState } from "react";
import "../Clothing/Cloths/Cloths.css";

function Appliances() {
  const [sortOrder, setSortOrder] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  const products = [
    {
      img: "https://m.media-amazon.com/images/I/71n58CqA5LL._SL1500_.jpg",
      name: "LG 190L Refrigerator",
      price: 15990,
      brand: "LG",
    },
    {
      img: "https://m.media-amazon.com/images/I/61XpnKq+6fL._SL1500_.jpg",
      name: "Samsung 6kg Washing Machine",
      price: 16490,
      brand: "Samsung",
    },
    {
      img: "https://m.media-amazon.com/images/I/61+FJrB8gmL._SL1500_.jpg",
      name: "IFB 30L Microwave Oven",
      price: 12499,
      brand: "IFB",
    },
    {
      img: "https://m.media-amazon.com/images/I/71bm3uk5BtL._SL1500_.jpg",
      name: "Havells 1200mm Ceiling Fan",
      price: 2399,
      brand: "Havells",
    },
    {
      img: "https://m.media-amazon.com/images/I/81On7xBEkwL._SL1500_.jpg",
      name: "Philips Air Fryer",
      price: 7999,
      brand: "Philips",
    },
    {
      img: "https://m.media-amazon.com/images/I/61FPCYPJZyL._SL1500_.jpg",
      name: "Panasonic 20L Solo Microwave",
      price: 7490,
      brand: "Panasonic",
    },
  ];

  const handleAddToCart = (name) => {
    alert(`"${name}" added to cart!`);
  };

  const handleAddToWishlist = (name) => {
    alert(`"${name}" added to wishlist!`);
  };

  const sortedProducts = [...products]
    .filter((p) => !brandFilter || p.brand === brandFilter)
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      return 0;
    });

  const uniqueBrands = [...new Set(products.map((p) => p.brand))];

  return (
    <div className="cloths-wrapper">
      <div className="cloths-header">
        <h1>Appliances</h1>
        <p>Essential appliances for your home and kitchen!</p>
      </div>

      <div className="content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Sort by Price</h3>
          <button onClick={() => setSortOrder("low-to-high")}>Low to High</button>
          <button onClick={() => setSortOrder("high-to-low")}>High to Low</button>

          <h3>Filter by Brand</h3>
          <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>
            <option value="">All Brands</option>
            {uniqueBrands.map((brand, idx) => (
              <option key={idx} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </aside>

        {/* Product Cards */}
        <div className="products-container">
          {sortedProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">₹{product.price.toLocaleString()}</p>
              <div className="buttons">
                <button className="add-to-cart" onClick={() => handleAddToCart(product.name)}>
                  Add to cart
                </button>
                <button
                  className="wishlist-btn"
                  onClick={() => handleAddToWishlist(product.name)}
                  aria-label="Add to wishlist"
                >
                  ❤
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Appliances;
