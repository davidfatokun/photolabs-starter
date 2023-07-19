import React, { useEffect } from 'react';
import axios from 'axios';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import { ACTIONS } from '../hooks/useApplicationData';

const TopNavigation = (props) => {
  useEffect(() => {
    axios.get('/api/topics')
      .then((res) => props.dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics: res.data } }))
  }, [])
  let isFavPhotoExist = false;
  if (props.state.likes.length > 0) {
    isFavPhotoExist = true;
  }
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList state={props.state} dispatch={props.dispatch}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} state={props.state} dispatch={props.dispatch}/>
    </div>
  )
}

export default TopNavigation;