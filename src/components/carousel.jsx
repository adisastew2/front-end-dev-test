import React from 'react';
import Slider from 'react-slick';

import {Row} from 'react-bootstrap';


class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <Row id='slider'>
        <div className = 'overlayText'>
          <h1 id='heroText'>Lorem Ipsum Lorem Ipsum</h1>
          <div>
            <span><button className='button'>button</button></span>
            <a href="#text"><img id='envelope' src='../../assets/envelope-icon.svg' /></a>
          </div>
        </div>
        {/*modal*/}
        <div className="modalbox" id="text">
          <div className="box">
            <a className="close" href="#">X</a>
            <p className="title">Lorem Ipsum</p>
            <div className="content">

              <a href="mailto:adisa.stewart1988@gmail.com">email me</a>
            </div>
          </div>
        </div>

        <Slider {...settings}>
          <div><img className='slide' src = '../../assets/hero-img.jpg'/></div>
          <div><img className='slide' src = '../../assets/iStock.jpg'/></div>
          <div><img className='slide' src = '../../assets/iStock2.jpg'/></div>
        </Slider>
      </Row>
      
    );
  }
}
export default Carousel;