import React from 'react';
import ApiCall from "./components/ApiCall.js"
import ApiCatch from "./components/ApiCatch.js"
import Update from "./components/Update.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
      <ApiCall />
      <ApiCatch />
      <Update />
      </div>
    </div>
  );
}

export default App;
