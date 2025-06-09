import React from 'react';
import './Offer2.css';
import Travel from './Travel.png';
import Earphones from './Earphones.webp';
import Watch from './watch.webp';

function Offer2() {
  return (
    <div className="offer2-wrapper">
      <div className="offer2-container">
        <h2 className="offer2-heading">Offers you can't refuse</h2>
        <div className="offer2-images">
          <img src={Travel} alt="Travel" className="offer-image" />
          <img src={Earphones} alt="Earphones" className="offer-image" />
          <img src={Watch} alt="Watch" className="offer-image" />

          {/* New images added below */}
          <img
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxatf25efpd84jc06mvpfyvm%2F1749488826_img_3.webp?st=2025-06-09T15%3A38%3A27Z&se=2025-06-15T16%3A38%3A27Z&sks=b&skt=2025-06-09T15%3A38%3A27Z&ske=2025-06-15T16%3A38%3A27Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=%2B5Xo67%2BaU2%2F%2FqVVIqVUhX99FQKwCR%2Bvv8ASMC%2FJjuaA%3D&az=oaivgprodscus"
            alt="Extra Offer 1"
            className="offer-image"
          />
          <img
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxatw2yrefcrjmw9kwxrdknn%2F1749489244_img_0.webp?st=2025-06-09T15%3A38%3A27Z&se=2025-06-15T16%3A38%3A27Z&sks=b&skt=2025-06-09T15%3A38%3A27Z&ske=2025-06-15T16%3A38%3A27Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=zLwTLX4Xlbqp3oJQmZdKj3%2BPhmj1dHxb7U5423Uqlu0%3D&az=oaivgprodscus"
            alt="Extra Offer 2"
            className="offer-image"
          />
          <img
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxav7k61e3xarjm31w9vjgqe%2F1749490026_img_1.webp?st=2025-06-09T16%3A33%3A57Z&se=2025-06-15T17%3A33%3A57Z&sks=b&skt=2025-06-09T16%3A33%3A57Z&ske=2025-06-15T17%3A33%3A57Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=lVZtSuUucWjF%2FOvKnk0hVaG8KlCHavzPVSZEaT4dqDQ%3D&az=oaivgprodscus"
            alt="Extra Offer 2"
            className="offer-image"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Offer2;
