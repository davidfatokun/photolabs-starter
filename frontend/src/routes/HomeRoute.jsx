import { React, useState } from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {  
  return (
    <div className="home-route">
      <TopNavigationBar likes={props.likes} topics={props.topics}/>
      <PhotoList photos={props.photos} state={props.state} dispatch={props.dispatch}/>
    </div>
  );
}

export default HomeRoute