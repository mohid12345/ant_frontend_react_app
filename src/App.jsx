
import React from 'react';
import ModelViewer from './page/ModelViewer';

function App() {
  return (
    <div className="App">
      {/* <h1>3D model</h1> */}
      <ModelViewer modelUrl="/antlownew.glb" />
    </div>
  );
}

export default App;
