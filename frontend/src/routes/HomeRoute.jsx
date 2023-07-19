import { React, useState, useEffect } from 'react';
import axios from 'axios';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import { ACTIONS } from '../hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {
  useEffect(() => {
    axios.get('/api/photos')
      .then((res) => props.dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: res.data } }))
  }, [])
  return (
    <div className="home-route">
      <TopNavigationBar state={props.state} dispatch={props.dispatch} />
      <PhotoList photos={props.state.photos} state={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default HomeRoute