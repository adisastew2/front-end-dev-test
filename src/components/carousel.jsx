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
          <h1>Lorem Ipsum Lorem Ipsum</h1>
          <div>
            <span><button>button</button></span>
            <a href="#text"><img id='envelope' src='../../assets/envelope-icon.svg' /></a>
          </div>
        </div>
        {/*modal*/}
        <div class="modalbox" id="text">
          <div class="box">
            <a class="close" href="#">X</a>
            <p class="title">Title Here</p>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur tristique placerat.</p>
            </div>
          </div>
        </div>

        <Slider className='slide' {...settings}>
          <div><img className='slide' src = '../../assets/hero-img.jpg'/></div>
          <div><img className='slide' src = '../../assets/iStock.jpg'/></div>
          <div><img className='slide' src = '../../assets/iStock2.jpg'/></div>
        </Slider>
      </Row>
      
    );
  }
}
export default Carousel;