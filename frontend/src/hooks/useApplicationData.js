import { React, useState } from 'react';

export function useApplicationData() {
  const [showComponent, setShowComponent] = useState(false);
  const [photoDetail, setPhotoDetail] = useState([]);
  const [likes, setLikes] = useState([]);

  return { showComponent: showComponent, setShowComponent: setShowComponent, photoDetail: photoDetail, setPhotoDetail: setPhotoDetail, likes: likes, setLikes: setLikes };
};