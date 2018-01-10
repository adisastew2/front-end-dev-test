import React from 'react';
import {render} from 'react-dom';

import Header from './components/header.jsx';
import Carousel from './components/carousel.jsx';
import Divider from './components/divider.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return(
      <div>
        <Header />
        <Carousel />
        <Divider />
      </div>
    ) 
  }
}
render(<App/>, document.getElementById('app'));