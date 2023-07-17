import {React, useState} from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [photoDetail, setPhotoDetail] = useState([]);
  const [likes, setLikes] = useState([]);

  return (
    <div className="App">
      <HomeRoute showComponent={showComponent} setShowComponent={setShowComponent} setPhotoDetail={setPhotoDetail} likes={likes} setLikes={setLikes} />
      {showComponent && <PhotoDetailsModal photoDetail={photoDetail} setPhotoDetail={setPhotoDetail} setLikes={setLikes} showComponent={showComponent} setShowComponent={setShowComponent}/>}
    </div>
  );
}

export default App