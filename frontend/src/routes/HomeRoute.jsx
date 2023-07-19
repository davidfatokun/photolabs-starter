import { React, useState } from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {  
  return (
    <div className="home-route">
      <TopNavigationBar state={props.state}/>
      <PhotoList photos={props.state.photos} state={props.state} dispatch={props.dispatch}/>
    </div>
  );
}

export default HomeRoute