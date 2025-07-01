import React, { useState } from "react";
import "./Cloths.css";
import { useCart } from "../../Cart/CartContext";
import Footer from "../../Homepage/Footer/Footer";

function Cloths() {
  const [alert, setAlert] = useState({ message: "", visible: false });
  const [sortOption, setSortOption] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const { addToCart } = useCart();

  const showAlert = (message) => {
    setAlert({ message, visible: true });
    setTimeout(() => setAlert({ message: "", visible: false }), 3000);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showAlert(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (name) => {
    showAlert(`${name} added to wishlist!`);
  };

  const products = [
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/t/3/o/l-yellow-anarkali-3p-oumad-original-imah82n6fprwexkg.jpeg?q=70",
      name: "Yellow Anarkali",
      price: 1299,
      category: "Female",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/k/u/2/xxl-tie-dye-001-fabunna-cotton-original-imagzwfb5v6mjupy.jpeg?q=70",
      name: "Tie Dye Ethnic Set",
      price: 1499,
      category: "Female",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/k/n/v/xl-b-sugarcane-formals-belpatra-original-imah7sswp9tfjvck.jpeg?q=70",
      name: "Formal Shirt",
      price: 799,
      category: "Male",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/n/t/h/m-st-6041-white-smartees-original-imahbhm7hyyymmbb.jpeg?q=70",
      name: "White T-Shirt",
      price: 499,
      category: "Male",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/y/d/xl-52-jando-wight-magneto-original-imagz28p77tzkm8v.jpeg?q=70",
      name: "Jando White T-Shirt",
      price: 599,
      category: "Male",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/top/r/i/n/l-top129-bullet-black-dream-beauty-fashion-original-imahaujnrzhw78cd.jpeg?q=70",
      name: "Black Top",
      price: 699,
      category: "Female",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      img: "https://www.kollybollyethnics.com/image/catalog/data/28Dec2018/Gold-shimmer-color-lycra-fancy-fabric-saree-5018.jpg",
      name: "Gold Shimmer Saree",
      price: 1899,
      category: "Female",
      sizes: ["Free Size"],
    },
    {
      img: "https://th.bing.com/th/id/OIP.39MQ-Bci7BfpdYltftFhdwHaJ4?w=206&h=275&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      name: "Elegant Embroidered Kurti",
      price: 1099,
      category: "Female",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
  ];

  let filteredProducts = [...products];

  if (filterCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === filterCategory
    );
  }

  if (sortOption === "low-to-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-to-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="cloths-wrapper">
      <div className="cloths-header-with-controls">
        <div className="cloths-header">
          <h1>Fashion Section</h1>
          <p>Explore our latest clothing collection!</p>
        </div>

        <div className="dropdown-controls">
          <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
            <option value="">Sort By</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>

          <select onChange={(e) => setFilterCategory(e.target.value)} value={filterCategory}>
            <option value="">Filter By</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      <div className={`custom-alert${alert.visible ? " show" : ""}`}>
        {alert.message}
      </div>

      <div className="products-container">
        {filteredProducts.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="price">₹{product.price}</div>
            <div className="sizes">Sizes: {product.sizes.join(", ")}</div>
            <div className="buttons">
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <button className="wishlist-btn" onClick={() => handleAddToWishlist(product.name)}>
                ♥
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Cloths;
