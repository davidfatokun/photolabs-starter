import { React, useState } from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import photos from '../mocks/photos';

// Note: Rendering a single component to build components in isolation
const HomeRoute = () => {
  const [likes, setLikes] = useState([]);
  
  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList likes={likes} setLikes={setLikes} photos={photos}/>
    </div>
  );
}

export default HomeRoute