import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const likes = props.likes;
  const setLikes = props.setLikes;
  const handleClick = () => {
    console.log('SVG clicked!');
    console.log(likes);
    setLikes([...likes, props.id]);
    console.log(likes);
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