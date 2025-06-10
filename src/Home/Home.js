import React, { useState } from "react";
import "../Mobiles/Mobiles.css"; // Reusing existing CSS

function Home() {
  const [sortOrder, setSortOrder] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  const products = [
    {
      img: "https://rukminim1.flixcart.com/image/832/832/kq6yefk0/sofa-sectional/d/0/b/blue-5-seater-204-bharat-lifestyle-35-original-imag496zyu2hq7hs.jpeg?q=70",
      name: "5-Seater Fabric Sofa",
      price: 15999,
      brand: "Bharat Lifestyle",
    },
    {
      img: "https://www.ulcdn.net/images/products/849314/product/Tyra_King_Bed_Walnut_Mattress_LP.jpg",
      name: "King Size Wooden Bed",
      price: 21999,
      brand: "Urban Ladder",
    },
    {
      img: "https://m.media-amazon.com/images/I/71zO4z0fugL._AC_UF894,1000_QL80_.jpg",
      name: "Modern Office Chair",
      price: 7499,
      brand: "Green Soul",
    },
    {
      img: "https://www.ulcdn.net/images/products/874515/product/Caspian_4_Seater_Dining_Table_Set_Finish_LP.jpg",
      name: "4-Seater Dining Table",
      price: 12999,
      brand: "Flipkart Perfect Homes",
    },
    {
      img: "https://www.furniturestore.ae/uploads/product/modern-tv-unit-design-wooden-tv-stand-for-home-20201210053914-500x500.jpg",
      name: "Wooden TV Unit",
      price: 8999,
      brand: "HomeTown",
    },
    {
      img: "https://ii1.pepperfry.com/media/catalog/product/j/u/494x544/julia-coffee-table-in-provincial-teak-finish-by-woodsworth-julia-coffee-table-in-provincial-teak-fi-joipaq.jpg",
      name: "Julia Coffee Table",
      price: 4299,
      brand: "Woodsworth",
    },
  ];

  const handleAddToCart = (name) => {
    alert(`"${name}" added to cart!`);
  };

  const handleAddToWishlist = (name) => {
    alert(`"${name}" added to wishlist!`);
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
    <div className="mobiles-wrapper">
      <div className="mobiles-header">
        <h1>Home & Furniture</h1>
        <p>Furniture and more for your perfect home!</p>
      </div>

      <div className="mobiles-content">
        {/* Sidebar */}
        <aside className="mobiles-sidebar">
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
        <div className="mobiles-products">
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

export default Home;
