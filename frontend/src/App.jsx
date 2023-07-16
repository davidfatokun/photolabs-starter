import {React, useState} from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="App">
      <HomeRoute showComponent={showComponent} setShowComponent={setShowComponent} />
      {showComponent && <PhotoDetailsModal/>}
    </div>
  );
}

export default App