import React from 'react';
import Slider from 'react-slick';


class IntroCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h1>Lorem Ipsum</h1>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
        </Slider>
      </div>
      
    );
  }
}
export default IntroCarousel;