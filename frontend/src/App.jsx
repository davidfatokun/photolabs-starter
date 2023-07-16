import {React, useState} from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [likes, setLikes] = useState([]);

  return (
    <div className="App">
      <HomeRoute setShowComponent={setShowComponent} likes={likes} setLikes={setLikes}/>
      {showComponent && <PhotoDetailsModal setShowComponent={setShowComponent}/>}
    </div>
  );
}

export default App