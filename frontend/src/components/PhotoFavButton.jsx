import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const setLikes = props.setLikes;
  let displayAlert = false;
  let fill = "none";
  // let likesCopy = JSON.parse(JSON.stringify(props.likes));
  console.log("Likes:", props.likes);
  if (props.likes.map(like => like.id).includes(props.id)) { 
    displayAlert = true;
    fill = "#C80000";
  }
  const handleClick = () => {    
    console.log('Photo Fav Button clicked!');
    setLikes(prev => {
      if (!prev.includes(props.photo)) {
        return [...prev, props.photo];
      } else {
        return prev;
      }
    });
    displayAlert = true;
    fill = "#C80000";
  };
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={displayAlert} fill={fill}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;