import React from 'react';
import ApiCall from "./components/ApiCall.js"
import ApiCatch from "./components/ApiCatch.js"

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Text">
        <ApiCall />
        <ApiCatch />
        </div>  
      </div>
    </div>
  );
}

export default App;
