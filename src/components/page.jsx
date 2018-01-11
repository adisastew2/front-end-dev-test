import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Page(props){
  return (
    <Col className='page' md={3} >
      <a href={props.doc}>
        <img className='left' src='../../assets/page-icon.svg'/>
      </a>
      
      <p>{props.txt}</p>
    </Col>

  );
}

export default Page;