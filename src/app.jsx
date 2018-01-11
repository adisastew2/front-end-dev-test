import React from 'react';
import {render} from 'react-dom';

import Header from './components/header.jsx';
import Carousel from './components/carousel.jsx';
import Divider from './components/divider.jsx';
import Pages from './components/pages.jsx';
import CheckerBox from './components/checkerbox.jsx'
import Stats from './components/stats.jsx'
import IntroCarousel from './components/introCarousel.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return(
      <div>
        <Header />
        <Carousel />
        <Pages />
        <Divider />
        <CheckerBox />
        <Stats />
        <IntroCarousel />
      </div>
    ) 
  }
}
render(<App/>, document.getElementById('app'));