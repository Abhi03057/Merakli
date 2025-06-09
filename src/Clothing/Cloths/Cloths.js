import React, { useState } from "react";
import "./Cloths.css";

function Cloths() {
  const [alert, setAlert] = useState({ message: "", visible: false });

  const showAlert = (message) => {
    setAlert({ message, visible: true });
    setTimeout(() => setAlert({ message: "", visible: false }), 3000);
  };

  const handleAddToCart = (name) => {
    showAlert(`"${name}" added to cart!`);
  };

  const handleAddToWishlist = (name) => {
    showAlert(`"${name}" added to wishlist!`);
  };

  const products = [
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/t/3/o/l-yellow-anarkali-3p-oumad-original-imah82n6fprwexkg.jpeg?q=70",
      name: "Yellow Anarkali",
      price: "₹1,299",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/k/u/2/xxl-tie-dye-001-fabunna-cotton-original-imagzwfb5v6mjupy.jpeg?q=70",
      name: "Tie Dye Ethnic Set",
      price: "₹1,499",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/k/n/v/xl-b-sugarcane-formals-belpatra-original-imah7sswp9tfjvck.jpeg?q=70",
      name: "Formal Shirt",
      price: "₹799",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/n/t/h/m-st-6041-white-smartees-original-imahbhm7hyyymmbb.jpeg?q=70",
      name: "White T-Shirt",
      price: "₹499",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/y/d/xl-52-jando-wight-magneto-original-imagz28p77tzkm8v.jpeg?q=70",
      name: "Jeans White T-Shirt",
      price: "₹599",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/top/r/i/n/l-top129-bullet-black-dream-beauty-fashion-original-imahaujnrzhw78cd.jpeg?q=70",
      name: "Black Top",
      price: "₹699",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
  ];

  return (
    <div className="cloths-wrapper">
      <div className="cloths-header">
        <h1>Fashion Section</h1>
        <p>Explore our latest clothing collection!</p>
      </div>

      <div className="products-container">
        {products.map((product, i) => (
          <div key={i} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="sizes">
              Sizes: {product.sizes.join(", ")}
            </p>
            <div className="buttons">
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product.name)}
              >
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

      {/* Custom orange alert box */}
      <div className={`custom-alert ${alert.visible ? "show" : ""}`}>
        {alert.message}
      </div>
    </div>
  );
}

export default Cloths;
