import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';

const PhotoList = (props) => {
  const mappedPhotos = props.photos.map((photo, index) => {
    return <PhotoListItem
      key={photo.id}
      id={photo.id}
      name={photo.user.name}
      username={photo.user.username}
      profile={photo.user.profile}
      imageSource={photo.urls.regular}
      city={photo.location.city}
      country={photo.location.country}
      likes={props.likes}
      setLikes={props.setLikes}
      showComponent={props.showComponent}
      setShowComponent={props.setShowComponent}
      setPhotoDetail={props.setPhotoDetail}
      photo={photo}
    />;
  });

  return (
    <ul className="photo-list">
      {mappedPhotos}
    </ul>
  );
}

PhotoList.defaultProps = {
  photos: photos
}

export default PhotoList