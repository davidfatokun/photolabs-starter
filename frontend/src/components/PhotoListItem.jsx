
import {React, useState} from 'react';

import '../styles/PhotoListItem.scss';
import '../styles/PhotoFavButton.scss';
import PhotoFavButton from './PhotoFavButton';
import { ACTIONS } from '../hooks/useApplicationData';

const PhotoListItem = (props) => {
  /* Insert React */
  const handleClick = () => {
    console.log('Photo Item clicked!');
    if(!props.state.showComponent){
      props.dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { id: props.photo.id }}); 
    } 
  };  
  return (
    <div className="photo-list__item"  >
      <PhotoFavButton id={props.photo.id} state={props.state} dispatch={props.dispatch}/>
      <img className="photo-list__image" src={props.photo.urls.regular} onClick={handleClick}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile}></img>
        <div className="photo-list__user-info">
          <p className="photo-list__user-profile-name"> {props.photo.user.name}
          </p>
          <p className="photo-list__user-location"> {props.photo.location.city}, {props.photo.location.country}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem