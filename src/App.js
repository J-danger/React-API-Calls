import React, {Component} from 'react';
import ApiCall from "./components/ApiCall.js"
import ApiCatch from "./components/ApiCatch.js"
import Chart from "./components/Chart.js"
import './App.css';

class App extends Component {
  
  render(){
    if (localStorage.getItem("Last")){
      return(
      <>test</>
      )
    } else {
  return (
    <div className="App">
      <div className="Container">  
        <ApiCall />
        <ApiCatch />
        <Chart />
      </div>
    </div>
  );
}}
}

export default App;
