import { React } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useApplicationData } from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    showComponent,
    setShowComponent,
    photoDetail, 
    setPhotoDetail, 
    likes, 
    setLikes} = {...useApplicationData()};

  return (
    <div className="App">
      <HomeRoute showComponent={showComponent} setShowComponent={setShowComponent} setPhotoDetail={setPhotoDetail} likes={likes} setLikes={setLikes} />
      {showComponent && <PhotoDetailsModal photoDetail={photoDetail} setPhotoDetail={setPhotoDetail} likes={likes} setLikes={setLikes} showComponent={showComponent} setShowComponent={setShowComponent} />}
    </div>
  );
}

export default App