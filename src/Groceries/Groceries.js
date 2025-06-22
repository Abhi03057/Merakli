import React, { useState } from "react";
import "../Clothing/Cloths/Cloths.css";
import { useCart } from "../Cart/CartContext";
import Footer from "../Homepage/Footer/Footer";

function Groceries() {
  const { addToCart } = useCart();

  const initialItems = [
    {
      img: "https://th.bing.com/th/id/OIP.TVLgE9gou6yuwL0QrQzZhAHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      name: "Daawat Basmati Rice 5kg",
      category: "Grains",
      price: 599,
    },
    {
      img: "https://th.bing.com/th/id/OIP.wVqFKwMeHkN5tG5rCsh20AHaE8?rs=1&pid=ImgDetMain",
      name: "Aashirvaad Whole Wheat Atta 10kg",
      category: "Flour",
      price: 489,
    },
    {
      img: "https://s3.amazonaws.com/images.ecwid.com/images/32880331/1608152218.jpg",
      name: "Tata Salt 1kg",
      category: "Spices",
      price: 28,
    },
    {
      img: "https://www.bigbasket.com/media/uploads/p/l/40046230_4-amul-amul-cow-ghee-1-l.jpg",
      name: "Amul Ghee 1L",
      category: "Dairy",
      price: 589,
    },
    {
      img: "https://spicetown.fi/wp-content/uploads/MDH-Garam-Masala-100-g.jpg",
      name: "MDH Garam Masala 100g",
      category: "Spices",
      price: 65,
    },
    {
      img: "https://cdnprod.mafretailproxy.com/sys-master-root/he0/h83/33683397115934/248955_main.jpg_480Wx480H",
      name: "Tropicana Orange Juice 1L",
      category: "Beverages",
      price: 105,
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [alert, setAlert] = useState({ message: "", visible: false });

  const showAlert = (message) => {
    setAlert({ message, visible: true });
    setTimeout(() => setAlert({ message: "", visible: false }), 3000);
  };

  const handleSort = (type) => {
    const sorted = [...items];
    if (type === "low-to-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === "high-to-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setItems(sorted);
  };

  const handleFilter = (category) => {
    const filtered = initialItems.filter((item) => item.category === category);
    setItems(filtered);
  };

  const resetFilter = () => setItems(initialItems);

  const handleAddToCart = (item) => {
    addToCart(item);
    showAlert(`"${item.name}" added to cart!`);
  };

  const handleAddToWishlist = (name) => {
    showAlert(`"${name}" added to wishlist!`);
  };

  return (
    <>
      <div className="cloths-wrapper">
        <div className="cloths-header">
          <h1>Grocery Essentials</h1>
          <p>Shop daily needs at unbeatable prices.</p>
        </div>

        <div className="content-container">
          <aside className="sidebar">
            <h3>Sort By</h3>
            <button onClick={() => handleSort("low-to-high")}>Price: Low to High</button>
            <button onClick={() => handleSort("high-to-low")}>Price: High to Low</button>

            <h3>Filter By Category</h3>
            <button onClick={() => handleFilter("Grains")}>Grains</button>
            <button onClick={() => handleFilter("Flour")}>Flour</button>
            <button onClick={() => handleFilter("Spices")}>Spices</button>
            <button onClick={() => handleFilter("Dairy")}>Dairy</button>
            <button onClick={() => handleFilter("Beverages")}>Beverages</button>
            <button onClick={resetFilter}>Show All</button>
          </aside>

          <div className="products-container">
            {items.map((item, idx) => (
              <div className="product-card" key={idx}>
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <p className="price">₹{item.price.toLocaleString()}</p>
                <div className="buttons">
                  <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </button>
                  <button className="wishlist-btn" onClick={() => handleAddToWishlist(item.name)}>
                    ❤
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`custom-alert ${alert.visible ? "show" : ""}`}>
          {alert.message}
        </div>
      </div>

      {/* Footer is OUTSIDE the grocery content */}
      <div className="footer-fullwidth">
        <Footer />
      </div>
    </>
  );
}

export default Groceries;
