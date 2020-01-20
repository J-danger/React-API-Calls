import React, {Component} from 'react';
import ApiCall from './components/ApiCall.js'
import Table from './components/Table.js'
import Clock from './components/Clock.js'
import Chart from './components/Chart.js'
import './App.css';

class App extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     chartData:{}
      
  //   }
  // }

  // componentWillMount(){
  //   this.getChartData();
  // }

  // getChartData(){
  //   // Ajax calls here
  //   this.setState({
  //     chartData:{
  //       labels: ['BTC', 'ETH', 'XMR', 'BCH', 'ZEC'],
  //       datasets:[
  //         {
  //           label:'Population',
  //           data:[
  //             this.state.volBTC,
  //             181045,
  //             153060,
  //             106519,
  //             105162,
  //             95072
  //           ],
  //           backgroundColor:[
  //             'rgba(255, 99, 132, 0.6)',
  //             'rgba(54, 162, 235, 0.6)',
  //             'rgba(255, 206, 86, 0.6)',
  //             'rgba(75, 192, 192, 0.6)',
  //             'rgba(153, 102, 255, 0.6)',
  //             'rgba(255, 159, 64, 0.6)',
  //             'rgba(255, 99, 132, 0.6)'
  //           ]
  //         }
  //       ]
  //     }
  //   });
  // }
  
  render(){
    if (localStorage.getItem('Last')){
      return(
      <>test</>
      )
    } else {
  return (
    <div className='App'>
      <div className='Container'> 
        <Clock /> 
        {/* <ApiCall />        */}
        <Table />
        {/* <Chart /> */}
        
      </div>
    </div>
  );
}}
}

export default App;
