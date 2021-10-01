import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./carouselItem";
import "./Carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
];

function CarouselApplication() {
  return (
    <>
      
      <div className="CarouselApp">
        <Carousel breakPoints={breakPoints} enableAutoPlay={true} showStatus={false} showIndicators={false} showThumbs={false}>
          <Item></Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselApplication;
