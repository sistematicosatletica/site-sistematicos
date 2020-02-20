import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";

// Heads up!
// Don't forget to setyp required CSS!

/*import CardCarousel from "./img/escudo.png";*/
const ImageCarousel = () => (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={3}
    >
      <Slider>
        <Slide tag="a" index={0}>
          <Image src="https://lorempixel.com/800/800/cats/0" />
        </Slide>
        <Slide tag="a" index={1}>
          <Image src="https://lorempixel.com/800/800/cats/1" />
        </Slide>
        <Slide tag="a" index={2}>
          <Image src="https://lorempixel.com/800/800/cats/2" />
        </Slide>
      </Slider>
  
      <Divider />
      
    </CarouselProvider>
  );
  
  export default ImageCarousel;
