import React from 'react';

import {Row, Col} from 'react-bootstrap';

function Pages(){
  return (
    <div id='pages'>
      <Row>
        <Col md={3}></Col>
        <Col md={3} >
          <img className='left' src='../../assets/page-icon.svg'/>
          <p>Lorem ipsum</p>
        </Col>
        <Col md={3} >
          <img className='left' src='../../assets/page-icon.svg'/>
          <p>Lorem ipsum</p>
        </Col>
        <Col md={3}></Col>
      </Row>

      <Row>
        <Col md={3}></Col>
        <Col md={3} >
          <img className='left' src='../../assets/page-icon.svg'/>
          <p>Lorem ipsum</p>
        </Col>
        <Col md={3} >
          <img className='left' src='../../assets/page-icon.svg'/>
          <p>Lorem ipsum</p>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>

  );
}

export default Pages;