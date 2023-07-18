
import {React, useState} from 'react';

import '../styles/PhotoListItem.scss';
import '../styles/PhotoFavButton.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  /* Insert React */
  const showComponent = props.showComponent;
  const setShowComponent = props.setShowComponent;
  const setPhotoDetail = props.setPhotoDetail;
  const photo = props.photo;
  const handleClick = () => {
    console.log('Photo Item clicked!');
    if (!showComponent) {
      setShowComponent(true);
      setPhotoDetail([photo])
    }
  };  
  return (
    <div className="photo-list__item"  >
      <PhotoFavButton id={props.id} likes={props.likes} setLikes={props.setLikes} photo={photo} />
      <img className="photo-list__image" src={props.imageSource} onClick={handleClick}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile}></img>
        <div className="photo-list__user-info">
          <p className="photo-list__user-profile-name"> {props.name}
          </p>
          <p className="photo-list__user-location"> {props.city}, {props.country}
          </p>
        </div>
      </div>
    </div>
  );
}

PhotoListItem.defaultProps = {
  "id": "1",
  "city": "Montreal",
  "country": "Canada",
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "name": "Joe Example",
  "username": "exampleuser",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem