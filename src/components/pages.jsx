import React from 'react';

import {Row, Col} from 'react-bootstrap';
import Page from './page.jsx';

function Pages(){
  return (
    <div id='pages'>
      <Row>
        <Col md={3}></Col>
        <Page />
        <Page />
        <Col md={3}></Col>
      </Row>

      <Row>
        <Col md={3}></Col>
        <Page />
        <Page />
        <Col md={3}></Col>
      </Row>
    </div>

  );
}

export default Pages;