import React from 'react';

import {Row, Col} from 'react-bootstrap';
import Page from './page.jsx';

function Pages(){
  return (
    <div id='pages'>
      <Row>
        <Col md={3}></Col>
        <Page txt='my resume in word' doc='../../assets/software.docx'/>
        <Page txt='my resume in pdf' doc='../../assets/software.pdf'/>
        <Col md={3}></Col>
      </Row>

      <Row>
        <Col md={3}></Col>
        <Page txt='mov of me breaking a board' doc='../../assets/boardBreak.mov'/>
        <Page txt='if you are a marvel fan' doc='../../assets/blackPanther.jpg'/>
        <Col md={3}></Col>
      </Row>
    </div>

  );
}

export default Pages;