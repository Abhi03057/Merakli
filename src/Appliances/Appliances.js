import React, { useState } from "react";
import "../Clothing/Cloths/Cloths.css";
import { useCart } from "../Cart/CartContext";
import Footer from "../Homepage/Footer/Footer";

function Appliances() {
  const [sortOrder, setSortOrder] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  const { addToCart } = useCart();

  const products = [
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6250/6250127cv36d.jpg",
      name: "LG - 26 Cu. Ft. French Door-in-Door Smart Refrigerator with Dual Ice Maker - Stainless Steel",
      price: 146200,
      brand: "LG",
    },
    {
      img: "https://rukminim1.flixcart.com/image/1408/1408/washing-machine-new/p/5/r/samsung-wf602b2bhsd-tl-original-imaej9ygaruyuhkf.jpeg?q=90",
      name: "Samsung 6kg Washing Machine",
      price: 16490,
      brand: "Samsung",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0525/2592/4550/products/81kuNvM7ciL._SL1500.jpg?crop=center&height=1500&v=1664886393&width=1500",
      name: "IFB 30L Microwave Oven",
      price: 12499,
      brand: "IFB",
    },
    {
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1719329232/Croma%20Assets/Small%20Appliances/Fans/Images/304600_0_mrczoh.png",
      name: "Havells 1200mm Ceiling Fan",
      price: 2399,
      brand: "Havells",
    },
    {
      img: "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1500,w-1500,cm-pad_resize/catalog/brandstore/philips/254-2023_04_25-HD9257_4.jpg",
      name: "Philips Air Fryer",
      price: 7999,
      brand: "Philips",
    },
    {
      img: "https://www.panasonic.com/content/dam/pim/my/en/NN/NN-ST2/NN-ST22QB/ast-2469044.jpg.pub.crop.pc.thumb.640.1200.jpg",
      name: "Panasonic 20L Solo Microwave",
      price: 7490,
      brand: "Panasonic",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
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
    <>
      <div className="cloths-wrapper">
        <div className="cloths-header-with-controls">
          <div className="cloths-header">
            <h1>Appliances</h1>
            <p>Essential appliances for your home and kitchen!</p>
          </div>
          <div className="dropdown-controls">
            <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
              <option value="">Sort By</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>

            <select onChange={(e) => setBrandFilter(e.target.value)} value={brandFilter}>
              <option value="">All Brands</option>
              {uniqueBrands.map((brand, idx) => (
                <option key={idx} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>

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

      <div className="footer-fullwidth">
        <Footer />
      </div>
    </>
  );
}

export default Appliances;
