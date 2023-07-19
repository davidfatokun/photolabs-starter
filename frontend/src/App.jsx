import { React } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useApplicationData } from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [state, dispatch] = useApplicationData();
  return (
    <div className="App">
      <HomeRoute likes={state.likes} topics={state.topics} photos={state.photos} state={state} dispatch={dispatch}/>
      {state.showComponent && <PhotoDetailsModal state={state} dispatch={dispatch}/>}
    </div>
  );
}

export default App