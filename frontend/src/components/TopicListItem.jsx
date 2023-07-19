import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/TopicListItem.scss'
import { ACTIONS } from '../hooks/useApplicationData';

const TopicListItem = (props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(prev => !prev);
  };
  useEffect(() => {
    if (clicked) {
      axios.get(`/api/topics/photos/${props.topic.id}`)
        .then((res) => props.dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: res.data } }))
    } else {
      axios.get('/api/photos')
      .then((res) => props.dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: res.data } }))
    }
  }, [clicked]);
  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>
        {props.topic.title}
      </span>
    </div>
  );
}

export default TopicListItem