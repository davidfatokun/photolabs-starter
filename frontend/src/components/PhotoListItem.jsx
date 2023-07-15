
import React from 'react';

import '../styles/PhotoListItem.scss';
import '../styles/PhotoFavButton.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item">      
      <p className="photo-list__user-info photo-list__user-details"> {props.name}
      </p>
      <PhotoFavButton/>
      <img className="photo-list__image" src={props.imageSource}></img>
      <p className="photo-list__user-location"> {props.city} {props.country}
      </p>
      <img className="photo-list__user-profile" src={props.profile}></img>
      <p className="photo-list__user-info photo-list__user-details"> {props.username}
      </p>      
    </div>
  );
}

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem