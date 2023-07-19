import React, { useEffect } from 'react';
import axios from 'axios';

import '../styles/TopicListItem.scss'
import { ACTIONS } from '../hooks/useApplicationData';

const TopicListItem = (props) => {
  const state = props.state;
  const topic = props.topic;
  const dispatch = props.dispatch;
  let clicked  = false;
  if (state.topicsClicked.includes(topic.id)) {
    clicked = true;
  }
  const handleClick = () => {
    if (state.topicsClicked.includes(topic.id)) {
      dispatch({ type: ACTIONS.REMOVE_TOPIC, payload: { id: topic.id } });
      clicked = false;
    } else {
      dispatch({ type: ACTIONS.SELECT_TOPIC, payload: { id: topic.id } });
      clicked = true;
    }
  };
  useEffect(() => {
    if (state.topicsClicked.includes(topic.id)) {
      axios.get(`/api/topics/photos/${topic.id}`)
        .then((res) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: res.data } }))
    } else {
      axios.get('/api/photos')
      .then((res) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: res.data } }))
    }
  }, [clicked]);
  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>
        {topic.title}
      </span>
    </div>
  );
}

export default TopicListItem