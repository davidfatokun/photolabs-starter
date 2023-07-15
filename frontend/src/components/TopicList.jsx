import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
import topics from '../mocks/topics';

const TopicList = (props) => {
  const mappedTopics = props.topics.map((topic, index) => {
    return <TopicListItem
      key={topic.id}
      slug={topic.slug}
      title={topic.title}
    />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {mappedTopics}
    </div>
  );
}

TopicList.defaultProps = {
  topics: topics
}
export default TopicList