import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const mappedPhotos = props.photos.map((photo, index) => {
    return <PhotoListItem
      key={photo.id}     
      photo={photo}
      state={props.state} 
      dispatch={props.dispatch}
    />;
  });

  return (
    <ul className="photo-list">
      {mappedPhotos}
    </ul>
  );
}

export default PhotoList