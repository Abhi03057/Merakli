import React, { useState } from "react";
import "../Clothing/Cloths/Cloths.css";
import { useCart } from "../Cart/CartContext";
import Footer from "../Homepage/Footer/Footer";

function Mobiles() {
  const { addToCart } = useCart();

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


  const [alert, setAlert] = useState({ message: "", visible: false });
  const [sortOption, setSortOption] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

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

  // Handle sorting & filtering
  let filtered = [...initialProducts];

  if (brandFilter) {
    filtered = filtered.filter((p) => p.brand === brandFilter);
  }

  if (sortOption === "low-to-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-to-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="cloths-wrapper">
        <div className="cloths-header-with-controls">
          <div className="cloths-header">
            <h1>Mobiles</h1>
            <p>Explore the latest smartphones at unbeatable prices!</p>
          </div>

          <div className="dropdown-controls">
            <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
              <option value="">Sort By</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>

            <select onChange={(e) => setBrandFilter(e.target.value)} value={brandFilter}>
              <option value="">Filter By Brand</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Google">Google</option>
              <option value="Oppo">Oppo</option>
            </select>
          </div>
        </div>

        <div className="products-container">
          {filtered.map((product, idx) => (
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

export default Mobiles;
