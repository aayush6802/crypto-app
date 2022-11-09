import React from "react";
import { Carousel } from "react-responsive-carousel";

const MyCarousel = () => {
  return (
    <HStack>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        width={"100vw"}
        border={"2px"}
        borderColor={"yellow"}
        borderStyle={"solid"}
      ></Carousel>
    </HStack>
  );
};

export default MyCarousel;
