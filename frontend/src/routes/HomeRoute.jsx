import { React, useState } from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import photos from '../mocks/photos';

// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {  
  return (
    <div className="home-route">
      <TopNavigationBar likes={props.likes}/>
      <PhotoList setLikes={props.setLikes} photos={photos} showComponent={props.showComponent} setShowComponent={props.setShowComponent} setPhotoDetail={props.setPhotoDetail}/>
    </div>
  );
}

export default HomeRoute