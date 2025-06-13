import React, { useState } from "react";
import "../Clothing/Cloths/Cloths.css";
import "./Home.css";
import { useCart } from "../Cart/CartContext"; // ✅ Import useCart

function Home() {
  const { addToCart } = useCart(); // ✅ Access global addToCart
  const [sortOrder, setSortOrder] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [alert, setAlert] = useState({ message: "", visible: false }); // ✅ Alert state

  const products = [
    {
      img: "https://images.woodenstreet.de/image/data/fabric-sofa/mishael/5-seater/left-aligned/2.jpg",
      name: "5-Seater Fabric Sofa",
      price: 15999,
      brand: "Bharat Lifestyle",
    },
    {
      img: "https://images.woodenstreet.de/image/data/bed-with-storage/adolph-bed-with-side-storage/revised/revised/honey/updated/honey/1.jpg",
      name: "King Size Wooden Bed",
      price: 21999,
      brand: "Urban Ladder",
    },
    {
      img: "https://res.litfad.com/site/img/item/2023/10/23/10314212/1200x1200.jpg",
      name: "Modern Office Chair",
      price: 7499,
      brand: "Green Soul",
    },
    {
      img: "https://cdn.decornation.in/wp-content/uploads/2020/03/solid-wooden-dining-table-1.jpg",
      name: "4-Seater Dining Table",
      price: 12999,
      brand: "Flipkart Perfect Homes",
    },
    {
      img: "https://images.woodenstreet.de/image/data/tv-units/melvina-tv-unit/revised/honey/updated/new-logo/1.jpg",
      name: "Wooden TV Unit",
      price: 8999,
      brand: "HomeTown",
    },
    {
      img: "https://target.scene7.com/is/image/Target/GUEST_f6c3de1e-6788-444b-a0b4-f65a0e7134aa?qlt=65&fmt=pjpeg&hei=350&wid=350",
      name: "Julia Coffee Table",
      price: 4299,
      brand: "Woodsworth",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product); // ✅ Use global context
    showAlert(`"${product.name}" added to cart!`);
  };

  const handleAddToWishlist = (name) => {
    showAlert(`"${name}" added to wishlist!`);
  };

  const showAlert = (message) => {
    setAlert({ message, visible: true });
    setTimeout(() => setAlert({ message: "", visible: false }), 3000);
  };

  const sortedProducts = [...products]
    .filter((product) => !brandFilter || product.brand === brandFilter)
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      return 0;
    });

  const uniqueBrands = [...new Set(products.map((p) => p.brand))];

  return (
    <div className="cloths-wrapper">
      <div className="cloths-header">
        <h1>Home & Furniture</h1>
        <p>Furniture and more for your perfect home!</p>
      </div>

      <div className="content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Sort by Price</h3>
          <button onClick={() => setSortOrder("low-to-high")}>Low to High</button>
          <button onClick={() => setSortOrder("high-to-low")}>High to Low</button>

          <h3>Filter by Brand</h3>
          <select onChange={(e) => setBrandFilter(e.target.value)} value={brandFilter}>
            <option value="">All Brands</option>
            {uniqueBrands.map((brand, i) => (
              <option key={i} value={brand}>{brand}</option>
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
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
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

      {/* Alert */}
      <div className={`custom-alert ${alert.visible ? "show" : ""}`}>
        {alert.message}
      </div>
    </div>
  );
}

export default Home;
