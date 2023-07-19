import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
  const mappedTopics = props.state.topics.map((topic, index) => {
    return <TopicListItem
      key={topic.id}
      topic={topic}
      dispatch={props.dispatch}
    />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {mappedTopics}
    </div>
  );
}

export default TopicList