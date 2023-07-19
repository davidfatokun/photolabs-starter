import React, { useEffect } from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import topics from '../mocks/topics';
import { ACTIONS } from '../hooks/useApplicationData';

const TopNavigation = (props) => {
  useEffect(() => props.dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics }} ), []);
  let isFavPhotoExist = false;
  if (props.state.likes.length > 0) {
    isFavPhotoExist = true;
  }
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList state={props.state} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;