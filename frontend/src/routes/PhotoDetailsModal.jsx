import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from '../components/PhotoFavButton';
import { ACTIONS } from '../hooks/useApplicationData';

export const PhotoDetailsModal = (props) => {
  const photoDetail = props.state.photoDetail[0];
  const handleClick = () => {
    props.dispatch({ type: ACTIONS.REMOVE_PHOTO_DETAILS}); 
  };
  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={handleClick}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="photo-details-modal__image">
        <PhotoFavButton id={photoDetail.id} state={props.state} dispatch={props.dispatch}/>
        <img className="photo-details-modal__photo" src={photoDetail.urls.full}></img>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={photoDetail.user.profile}></img>
          <div className="photo-list__user-info">
            <p className="photo-list__user-profile-name"> {photoDetail.user.name}
            </p>
            <p className="photo-list__user-location"> {photoDetail.location.city}, {photoDetail.location.country}
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <h3>Related Photos</h3>
      <div className="photo-details-modal__images">
        <PhotoList photos={photoDetail.similar_photos} state={props.state} dispatch={props.dispatch}/>
      </div>
    </div>
  );
}

export default PhotoDetailsModal;