import React from 'react';
import "./Offer.css";

const Offers = [
  {
    img: "https://rukminim2.flixcart.com/image/96/96/xif0q/sari/9/y/y/free-3991s495-samah-unstitched-original-imah7fy848gvmzf6.jpeg?q=60",
    title: "Bestselling Sarees"
  },
  {
    img: "https://rukminim2.flixcart.com/image/96/96/xif0q/dress/w/b/2/-original-imaguzaajncp3ggb.jpeg?q=60",
    title: "Tokyo Talkies & Sassafras"
  },
  {
    img: "https://rukminim2.flixcart.com/image/96/96/xif0q/shoe/o/9/a/8-dark-pink-fws-15-8-footox-dark-pink-original-imagqf6veu6rwyvy.jpeg?q=60",
    title: "Women's Sports Shoes"
  },
  {
    img: "https://rukminim2.flixcart.com/image/96/96/xif0q/shoe/j/9/o/-original-imah4qrfhtfbdj4h.jpeg?q=60",
    title: "PUMA & Adidas"
  },
  {
    img: "https://rukminim2.flixcart.com/image/96/96/xif0q/moisturizer-cream/o/m/h/-original-imagzzm598qvyybx.jpeg?q=60",
    title: "Skincare"
  },
  {
    img: "https://rukminim2.flixcart.com/image/96/96/xif0q/sandal/g/d/f/6-gd602-39-picktoes-pink-original-imah3j5yf6hqamsg.jpeg?q=60",
    title: "Women's Flats & Heels"
  },
  {
    img: "https://rukminim2.flixcart.com/image/96/96/xif0q/shirt/x/m/o/-original-imah77ntswmmb49w.jpeg?q=60",
    title: "USPA & Levi's"
  },
  {
    img: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/5cb84c6283476d96.jpg?q=60",
    title: "Hottest Steals"
  },
  {
    img: "https://rukminim2.flixcart.com/image/96/96/kf2v3ww0/lipstick/q/f/f/6-fab-5-5-in-1-lipstick-renee-original-imafvhp2tuft7rxd.jpeg?q=60",
    title: "Renee & Sugar"
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
        <img className='Img1' src="https://rukminim2.flixcart.com/www/1060/1460/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=60" alt="" />
      </div>
    </div>
  );
}

export default Offer;
