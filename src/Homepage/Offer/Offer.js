import React from 'react';
import "./Offer.css";

const Offers = [
  {
    img: "https://imgeng.jagran.com/webstories/91438/alia-bhatt-s-met-gala-2024-princess-look--6--1715062208.jpeg",
    title: "Bestselling Sarees"
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/xif0q/dress/d/j/n/xl-ttce000155-tokyo-talkies-original-imagp22cygxdh2zg.jpeg?q=70",
    title: "Tokyo Talkies & Sassafras"
  },
  {
    img: "https://img.kwcdn.com/product/1dec4a1170/5162f26f-308e-4081-8604-e86edbc4ffe1_800x800.jpeg.a.jpg",
    title: "Women's Sports Shoes"
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.oCm3s5_IOWcGyFn_5R_H0gHaEK&pid=Api&P=0&h=180",
    title: "PUMA & Adidas"
  },
  {
    img: "https://img.freepik.com/premium-photo/natural-skincare-cosmetics-bottles-products-with-green-tropical-plant-leaves-flowers-vertical-background-with-copy-space-beauty-skin-care-herbal-organic-products-ai-generative-content_70898-9941.jpg",
    title: "Skincare"
  },
  {
    img: "https://rukminim2.flixcart.com/image/96/96/xif0q/sandal/g/d/f/6-gd602-39-picktoes-pink-original-imah3j5yf6hqamsg.jpeg?q=60",
    title: "Women's Flats & Heels"
  },
  {
    img: "https://globalprimenews.com/wp-content/uploads/2023/08/IMG-20230826-WA0012.jpg",
    title: "USPA & Levi's"
  },
  {
    img: "https://cms-cdn.thesolesupplier.co.uk/2020/11/bf-2.jpg.webp",
    title: "Hottest Steals"
  },
  {
    img: "https://cdn.zeptonow.com/production/tr:w-600,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/c51051f0-c22e-448d-9324-f2f7177d5ba7.jpeg",
    title: "Renee & Sugar"
  },
  {
    img: "https://thenewkits.com/wp-content/uploads/2021/03/ed7317fb-1024x1024.jpg",
    title: "Sport Accesories"
  },
  {
    img: "https://www.jaxtr.com/wp-content/uploads/2020/06/01-original-square-IMG_3914_1024x1024_74dc6460-ef6f-4084-8d02-8b4244c89ab7.jpg",
    title: "Electronic Accesories"
  }
];

function Offer() {
  return (
    <div className="offerContainer">
      <h3 className="heading">The 499 Club</h3>
      <div className="masonry">
        {Offers.map((offer, index) => (
          <div key={index} className="card">
            <img src={offer.img} alt={offer.title} />
            <p>{offer.title}</p>
            <span>Under ₹499</span>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Offer;
