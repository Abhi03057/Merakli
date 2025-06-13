import React, { useState } from "react";
import "../Clothing/Cloths/Cloths.css";
import { useCart } from "../Cart/CartContext"; // ✅ Import cart context

function Mobiles() {
  const { addToCart } = useCart(); // ✅ Get addToCart function
  const initialProducts = [
    {
      img: "https://www.dpreview.com/files/p/articles/3945272296/iPhone/Apple-iphone-16-event-021.jpeg",
      name: "iPhone 16",
      brand: "Apple",
      price: 139999,
    },
    {
      img: "https://cdn.mos.cms.futurecdn.net/NhiRH65M9hWSqKcZZKQqXD.jpg",
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      price: 119999,
    },
    {
      img: "https://assets.mspimages.in/gear/wp-content/uploads/2023/12/Galaxy-A55-5K4.jpg",
      name: "Samsung Galaxy A55",
      brand: "Samsung",
      price: 42999,
    },
    {
      img: "https://m.media-amazon.com/images/I/619oqSJVY5L._SL1500_.jpg",
      name: "iPhone 13",
      brand: "Apple",
      price: 59999,
    },
    {
      img: "https://gadget-cafe.jp/wp-content/uploads/2024/03/Google-Pixel-9.jpg.webp",
      name: "Google Pixel 9",
      brand: "Google",
      price: 89999,
    },
    {
      img: "https://en.shiftdelete.net/wp-content/uploads/2025/03/oppo-find-x8-ultra-ozellikleri-geekbench-testlerinde-ortaya-cikti-1-1.jpg",
      name: "Oppo Find X8 Ultra",
      brand: "Oppo",
      price: 79999,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [alert, setAlert] = useState({ message: "", visible: false });

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

  const handleSort = (type) => {
    const sorted = [...products];
    if (type === "low-to-high") sorted.sort((a, b) => a.price - b.price);
    else if (type === "high-to-low") sorted.sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  const handleBrandFilter = (brand) => {
    const filtered = initialProducts.filter((p) => p.brand === brand);
    setProducts(filtered);
  };

  const resetFilter = () => setProducts(initialProducts);

  return (
    <div className="cloths-wrapper">
      <div className="cloths-header">
        <h1>Mobiles</h1>
        <p>Explore the latest smartphones at unbeatable prices!</p>
      </div>

      <div className="content-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Sort By</h3>
          <button onClick={() => handleSort("low-to-high")}>Price: Low to High</button>
          <button onClick={() => handleSort("high-to-low")}>Price: High to Low</button>

          <h3>Filter By Brand</h3>
          <button onClick={() => handleBrandFilter("Apple")}>Apple</button>
          <button onClick={() => handleBrandFilter("Samsung")}>Samsung</button>
          <button onClick={() => handleBrandFilter("Google")}>Google</button>
          <button onClick={() => handleBrandFilter("Oppo")}>Oppo</button>
          <button onClick={resetFilter}>Show All</button>
        </aside>

        {/* Product Grid */}
        <div className="products-container">
          {products.map((product, idx) => (
            <div className="product-card" key={idx}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">₹{product.price.toLocaleString()}</p>
              <div className="buttons">
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
                <button className="wishlist-btn" onClick={() => handleAddToWishlist(product.name)}>
                  ❤
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Message */}
      <div className={`custom-alert ${alert.visible ? "show" : ""}`}>
        {alert.message}
      </div>
    </div>
  );
}

export default Mobiles;
