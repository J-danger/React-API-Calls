import React, { Component } from "react"
// import Chart from './Chart'
import {Bar, Line, Pie} from 'react-chartjs-2';
// import { bar } from 'react-chartjs-2';

class Table extends Component {
    constructor(props) {
        super(props);        
        this.state = {
          error: null,
          isLoaded: false,
          priceBTC: [],
          chartData:props.chartData,          
        };
      }
      static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        coin:[]
      }

      // componentWillMount(){
      //   this.getChartData();
      // }    

      componentDidMount() {
        fetch("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                priceBTC: result.last.toFixed(2),
                highBTC: result.high.toFixed(2),
                lowBTC: result.low.toFixed(2),
                volBTC: result.volume.toFixed(2),
                avgMonthBTC: result.averages.month.toFixed(2),
                monthPercentBTC: result.changes.percent.month.toFixed(2)
              });
            },           
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          ).then(fetch("https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                priceETH: result.last.toFixed(2),
                highETH: result.high.toFixed(2),
                lowETH: result.low.toFixed(2),
                volETH: result.volume.toFixed(2),
                avgMonthETH: result.averages.month.toFixed(2),
                monthPercentETH: result.changes.percent.month.toFixed(2)
              });
            },           
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
          ).then(fetch("https://apiv2.bitcoinaverage.com/indices/global/ticker/XMRUSD")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                priceXMR: result.last.toFixed(2),
                highXMR: result.high.toFixed(2),
                lowXMR: result.low.toFixed(2),
                volXMR: result.volume.toFixed(2),
                avgMonthXMR: result.averages.month.toFixed(2),
                monthPercentXMR: result.changes.percent.month.toFixed(2)
              });
            },           
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
          ).then(fetch("https://apiv2.bitcoinaverage.com/indices/global/ticker/BCHUSD")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                priceBCH: result.last.toFixed(2),
                highBCH: result.high.toFixed(2),
                lowBCH: result.low.toFixed(2),
                volBCH: result.volume.toFixed(2),
                avgMonthBCH: result.averages.month.toFixed(2),
                monthPercentBCH: result.changes.percent.month.toFixed(2)
              });
            },            
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
          ).then(fetch("https://apiv2.bitcoinaverage.com/indices/global/ticker/ZECUSD")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                priceZEC: result.last.toFixed(2),
                highZEC: result.high.toFixed(2),
                lowZEC: result.low.toFixed(2),
                volZEC: result.volume.toFixed(2),
                avgMonthZEC: result.averages.month.toFixed(2),
                monthPercentZEC: result.changes.percent.month.toFixed(2)
              });
            },         
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
            )
            ).then(
              
            this.setState({
              chartData:{
                labels: ['BTC', 'ETH', 'XMR', 'BCH', 'ZEC'],
                datasets:[
                  {
                    label:'Volume in USD',
                    data:[
                      this.state.volBTC,
                      181045,
                      153060,
                      106519,
                      105162,
                      95072
                    ],
                    backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(255, 99, 132, 0.6)'
                    ]
                  }
                ]
              }
            })
          )             
        }    


      
      render() {

      

        const { 
            error, 
            isLoaded,
            priceBTC, 
            highBTC, 
            lowBTC, 
            volBTC, 
            avgMonthBTC, 
            monthPercentBTC,
            priceETH, 
            highETH, 
            lowETH, 
            volETH, 
            avgMonthETH, 
            monthPercentETH, 
            priceXMR, 
            highXMR, 
            lowXMR, 
            volXMR, 
            avgMonthXMR, 
            monthPercentXMR, 
            priceBCH, 
            highBCH, 
            lowBCH, 
            volBCH, 
            avgMonthBCH, 
            monthPercentBCH,
            priceZEC, 
            highZEC, 
            lowZEC, 
            volZEC, 
            avgMonthZEC, 
            monthPercentZEC,
        } = this.state;

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (  
        <div className="table-container">         
        <table className="table" >
        <thead>
        <tr>
            <th className="chart-header" scope="col">Coin/Token</th>
            <th className="chart-header" scope="col">Price</th>
            <th className="chart-header" scope="col">24h High</th>
            <th className="chart-header" scope="col">24h Low</th>
            <th className="chart-header" scope="col">24h Volume</th>
            <th className="chart-header" scope="col">Month Average</th>
            <th className="chart-header" scope="col">Month Difference</th>            
        </tr>
        </thead>
        <tbody>
        <tr>
            <th className="coin-text" scope="row">BTC</th>
            <td className="price-text" >${priceBTC}</td>
            <td className="price-text" >${highBTC}</td>
            <td className="price-text" >${lowBTC}</td>
            <td className="price-text" >${volBTC}</td>
            <td className="price-text" >${avgMonthBTC}</td>
            <td className="price-text" >{monthPercentBTC}%</td>           
        </tr>
        <tr>
            <th className="coin-text" scope="row">ETH</th>
            <td className="price-text" >${priceETH}</td>
            <td className="price-text" >${highETH}</td>
            <td className="price-text" >${lowETH}</td>
            <td className="price-text" >${volETH}</td>
            <td className="price-text" >${avgMonthETH}</td>
            <td className="price-text" >{monthPercentETH}%</td>           
        </tr>
        <tr>
            <th className="coin-text" scope="row">XMR</th>
            <td className="price-text" >${priceXMR}</td>
            <td className="price-text" >${highXMR}</td>
            <td className="price-text" >${lowXMR}</td>
            <td className="price-text" >${volXMR}</td>
            <td className="price-text" >${avgMonthXMR}</td>
            <td className="price-text" >{monthPercentXMR}%</td>           
        </tr>
        <tr>
            <th className="coin-text" scope="row">BCH</th>
            <td className="price-text" >${priceBCH}</td>
            <td className="price-text" >${highBCH}</td>
            <td className="price-text" >${lowBCH}</td>
            <td className="price-text" >${volBCH}</td>
            <td className="price-text" >${avgMonthBCH}</td>
            <td className="price-text" >{monthPercentBCH}%</td>           
        </tr>
        <tr>
            <th className="coin-text" scope="row">ZEC</th>
            <td className="price-text" >${priceZEC}</td>
            <td className="price-text" >${highZEC}</td>
            <td className="price-text" >${lowZEC}</td>
            <td className="price-text" >${volZEC}</td>
            <td className="price-text" >${avgMonthZEC}</td>
            <td className="price-text" >{monthPercentZEC}%</td>           
        </tr>
        </tbody>
        </table>
        {/* <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'24 Hour Volume',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        /> */}
        
        </div>
          );
        }
      }
};

export default Table