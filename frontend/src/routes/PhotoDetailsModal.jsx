import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';

export const PhotoDetailsModal = (props) => {
  const setShowComponent = props.setShowComponent;
  const setPhotoDetail = props.setPhotoDetail;
  const photoDetail = props.photoDetail[0];
  console.log(props.photoDetail[0]);
  const handleClick = () => {
    console.log('Photo Detail Pop Up Closed!');
    setShowComponent(false);
    setPhotoDetail([]);
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
        {<PhotoListItem
          key={photoDetail.id}
          id={photoDetail.id}
          name={photoDetail.user.name}
          username={photoDetail.user.username}
          profile={photoDetail.user.profile}
          imageSource={photoDetail.urls.regular}
          city={photoDetail.location.city}
          country={photoDetail.location.country}
          setLikes={props.setLikes}
          showComponent={props.showComponent}
          setShowComponent={props.setShowComponent}
          setPhotoDetail={props.setPhotoDetail}
          photo={photoDetail}
        />}
      </div>
      <h3>Similar Photos</h3>
      <div className="photo-details-modal__images">
        <PhotoList setLikes={props.setLikes} photos={photoDetail.similar_photos} showComponent={props.showComponent} setShowComponent={props.setShowComponent} setPhotoDetail={props.setPhotoDetail} />
      </div>

    </div>
  );
}

export default PhotoDetailsModal;