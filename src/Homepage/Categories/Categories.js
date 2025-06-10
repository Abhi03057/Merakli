import React from 'react';
import "./Categories.css";
import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Grocery",
    image: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    link: "/grocery",
  },
  {
    name: "Mobiles",
    image: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    link: "/mobiles",
  },
  {
    name: "Fashion",
    image: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
    link: "/fashion",
  },
  {
    name: "Electronics",
    image: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    link: "/electronics",
  },
  {
    name: "Home & Furniture",
    image: "https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
    link: "/home",
  },
  {
    name: "Appliances",
    image: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg?q=100",
    link: "/appliances",
  },
];

function Categories() {
  return (
    <div className="container">
      {categories.map((category, index) => {
        const cardContent = (
          <div className="category-card">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        );

        return category.link ? (
          <Link to={category.link} key={index}>
            {cardContent}
          </Link>
        ) : (
          <div key={index}>{cardContent}</div>
        );
      })}
    </div>
  );
}

export default Categories;
