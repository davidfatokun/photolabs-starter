import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import topics from '../mocks/topics';

const TopNavigation = (props) => {
  let isFavPhotoExist = false;
  if (props.likes.length > 0) { 
    isFavPhotoExist = true;
  }
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;