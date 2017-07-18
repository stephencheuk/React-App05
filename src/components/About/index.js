import React from 'react';
import LazyLoad from '../../utils/LazyLoad';

const AboutApp = () => {
  return <LazyLoad getComponent={ ()=> import('./About.js') }/>
}

//import About from './About';

export default AboutApp;
