import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const setLikes = props.setLikes;
  const handleClick = () => {
    console.log('Photo Fav Button clicked!');
    setLikes(prev => {
      if (!prev.includes(props.photo)) {
        return [...prev, props.photo];
      } else {
        return prev;
      }
    });
  };
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon />
      </div>
    </div>
  );
}

export default PhotoFavButton;