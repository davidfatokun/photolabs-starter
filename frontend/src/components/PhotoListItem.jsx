
import React from 'react';

import '../styles/PhotoListItem.scss';
import '../styles/PhotoFavButton.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item">
      <PhotoFavButton key={props.key} id={props.id} likes={props.likes} setLikes={props.setLikes}/>
      <img className="photo-list__image" src={props.imageSource}></img>
      <p className="photo-list__user-info photo-list__user-details"> {props.name}
      </p>
      <p className="photo-list__user-info photo-list__user-details"> {props.username}
      </p>
      <p className="photo-list__user-location"> {props.city} {props.country}
      </p>
      <img className="photo-list__user-profile" src={props.profile}></img>
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