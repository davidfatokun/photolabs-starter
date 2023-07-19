import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { ACTIONS } from '../hooks/useApplicationData';

function PhotoFavButton(props) {
  let displayAlert = false;
  let fill = "none";
  if (props.state.likes.includes(props.id)) {
    displayAlert = true;
    fill = "#C80000";
  }
  const handleClick = () => {
    console.log('Photo Fav Button clicked!');
    if (displayAlert || fill === "#C80000") {
      props.dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: props.id } });
      displayAlert = false;
      fill = "none";
    } else {
      props.dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: props.id } });
      displayAlert = true;
      fill = "#C80000";
    }
  };
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={displayAlert} fill={fill} />
      </div>
    </div>
  );
}

export default PhotoFavButton;