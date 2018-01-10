import React from 'react';
import {render} from 'react-dom';

import Header from './components/header.jsx';
import Carousel from './components/carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return(
      <div>
        <Header />
        <Carousel />
      </div>
    ) 
  }
}
render(<App/>, document.getElementById('app'));