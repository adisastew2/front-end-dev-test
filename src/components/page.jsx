import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Page(){
  return (
    <Col className='page' md={3} >
      <a href="../../assets/software.docx">
        <img className='left' src='../../assets/page-icon.svg'/>
      </a>
      
      <p>Check out my resume</p>
    </Col>

  );
}

export default Page;