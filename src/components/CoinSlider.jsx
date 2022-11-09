import React from "react";
import { Carousel } from "react-responsive-carousel";

const CoinSlider = () => {
  return (
    <Carousel showArrows={true}>
      <div>
        <img src="https://img.freepik.com/free-photo/cryptocurrency-coding-digital-blue-background-open-source-blockchain-concept_53876-124644.jpg?w=2000" />
      </div>
      <div>
        <img src="https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-with-digital-circuit-lines-background_1017-33592.jpg" />
      </div>
    </Carousel>
  );
};

export default CoinSlider;
