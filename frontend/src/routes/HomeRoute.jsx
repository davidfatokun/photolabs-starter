import { React, useState, useEffect } from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import photos from '../mocks/photos';
import { ACTIONS } from '../hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {  
  useEffect(() => props.dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos }} ), []);
  return (
    <div className="home-route">
      <TopNavigationBar state={props.state} dispatch={props.dispatch}/>
      <PhotoList photos={props.state.photos} state={props.state} dispatch={props.dispatch}/>
    </div>
  );
}

export default HomeRoute