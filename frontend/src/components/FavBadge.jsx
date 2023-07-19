import React, { useState, useEffect } from 'react';
import FavIcon from './FavIcon';
import axios from 'axios';

import '../styles/FavBadge.scss';
import { ACTIONS } from '../hooks/useApplicationData';

export const FavBadge = ({ isFavPhotoExist, state, dispatch }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(prev => !prev);
  };
  useEffect(() => {
    if (clicked) {
      axios.get('/api/photos')
      .then((res) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: res.data.filter((item) => state.likes.includes(item.id)) } }))
    } else {
      axios.get('/api/photos')
      .then((res) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: res.data } }))
    }
  }, [clicked]);
  return (
    <div className='fav-badge' onClick={handleClick}>
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;