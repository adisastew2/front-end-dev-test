import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Stats(){
  return (
    <div>
      <h1 className='bigHead'><span className='bigHeadL'>Lorem</span> <span className='bigHeadR'>Ipsum</span></h1>
      <Row>
        <Col md={3}></Col>
        <Col md={3}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        <Col md={3}><button className='button'>button</button></Col>
        <Col md={3}></Col>
      </Row>
      <Row id='stats'>
        <Col md={4}>
          <h1 className='percent'>240%</h1>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
        </Col>
        <Col md={4}>
          <h1 className='percent'>105%</h1>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
        </Col>
        <Col md={4}>
          <h1 className='percent'>159%</h1>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
        </Col>
      </Row>
    </div>
  );
}

export default Stats;