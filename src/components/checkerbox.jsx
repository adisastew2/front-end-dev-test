import React from 'react';
import {Row, Col} from 'react-bootstrap';


function Checkerbox(){
  return (
    <div>
      <h1 className='bigHead'><span className='bigHeadL'>Lorem</span> <span className='bigHeadR'>Ipsum</span></h1>
      <Row>      
        <Col md={6}>
          <h2 className='midHead'>Lorem Ipsum</h2>
          <h3 className='smlHead'>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        <Col md={6}><img className='checkImg animated slideInRight' src='../../assets/hands.jpg'/></Col>
      </Row>

      <Row>
        <Col md={6}><img className='checkImg animated slideInLeft' src='../../assets/data.jpg'/></Col>
        <Col md={6}>
          <h2 className='midHead'>Lorem Ipsum</h2>
          <h3 className='smlHead'>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col> 
      </Row>

    </div>
  );
}

export default Checkerbox;