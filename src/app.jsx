import React from 'react';
import {render} from 'react-dom';

import {Grid} from 'react-bootstrap';

import Header from './components/header.jsx';
import Carousel from './components/carousel.jsx';
import Divider from './components/divider.jsx';
import Pages from './components/pages.jsx';
import CheckerBox from './components/checkerbox.jsx'
import Stats from './components/stats.jsx'
import IntroCarousel from './components/introCarousel.jsx'
import Social from './components/social.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return(
      <Grid>
        <Header />
        <Carousel />
        <Pages />
        <Divider />
        <CheckerBox />
        <Stats />
        <IntroCarousel />
        <Social />
      </Grid>
    ) 
  }
}
render(<App/>, document.getElementById('app'));