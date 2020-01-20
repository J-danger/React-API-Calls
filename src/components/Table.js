import React, { Component } from 'react'
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
          lastDate: localStorage.getItem('lastDate'),
          lastTime: localStorage.getItem('lastTime'),  
          showChart: true
        };
        this.showBTC = this.showBTC.bind(this);
        this.showETH = this.showETH.bind(this);
        this.showXMR = this.showXMR.bind(this);
        this.showBCH = this.showBCH.bind(this);
        this.showZEC = this.showZEC.bind(this);        
      }
 
      componentDidMount() {
        fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD')
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
                monthPercentBTC: result.changes.percent.month.toFixed(2),
                lastBTC: localStorage.getItem('lastBTC'),
                showBTC: true
              });
            },           
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
          .then(
            (result) => {
              let monthPercentBTC = this.state.monthPercentBTC
              localStorage.setItem('monthPercentBTC', monthPercentBTC )
              let lastBTC = this.state.priceBTC
              localStorage.setItem('lastBTC', lastBTC)              
            }
          )
          .then(fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD')
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
                monthPercentETH: result.changes.percent.month.toFixed(2),
                lastETH: localStorage.getItem('lastETH'),
                showETH: false
              });
            },           
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          ).then(
            (result) => {
              let monthPercentETH = this.state.monthPercentETH
              localStorage.setItem('monthPercentETH', monthPercentETH )
              let lastETH = this.state.priceETH
              localStorage.setItem('lastETH', lastETH)
            }
          )
          ).then(fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/XMRUSD')
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
                monthPercentXMR: result.changes.percent.month.toFixed(2),
                lastXMR: localStorage.getItem('lastXMR'),
                showXMR: false
              });
            },           
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          ).then(
            (result) => {
              let monthPercentXMR = this.state.monthPercentXMR
              localStorage.setItem('monthPercentXMR', monthPercentXMR )
              let lastXMR = this.state.priceXMR
              localStorage.setItem('lastXMR', lastXMR)
            }
          )
          ).then(fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/BCHUSD')
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
                monthPercentBCH: result.changes.percent.month.toFixed(2),
                lastBCH: localStorage.getItem('lastBCH'),
                showBCH: false
              });
            },            
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          ).then(
            (result) => {
              let monthPercentBCH = this.state.monthPercentBCH
              localStorage.setItem('monthPercentBCH', monthPercentBCH )
              let lastBCH = this.state.priceBCH
              localStorage.setItem('lastBCH', lastBCH)
            }
          )
          ).then(fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/ZECUSD')
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
                monthPercentZEC: result.changes.percent.month.toFixed(2),
                lastZEC: localStorage.getItem('lastZEC'),
                showZEC: false
              });
            },         
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
            ).then(
              (result) => {
                let monthPercentZEC = this.state.monthPercentZEC
                localStorage.setItem('monthPercentZEC', monthPercentZEC )
                let lastZEC = this.state.priceZEC
                localStorage.setItem('lastZEC', lastZEC)
              }
            )
            )
          }    
          
          
      showBTC = event => {
        event.preventDefault();
        this.setState(state => ({
          showBTC: true,
          showETH: false,
          showXMR: false,
          showBCH: false,
          showZEC: false
        }));
        }
      
      showETH = event => {
        event.preventDefault();
        this.setState(state => ({
          showBTC: false,
          showETH: true,
          showXMR: false,
          showBCH: false,
          showZEC: false
        }));
      }

      showXMR = event => {
        event.preventDefault();
        this.setState({
          showBTC: false,
          showETH: false,
          showXMR: true,
          showBCH: false,
          showZEC: false
        })
      }

      showBCH = event => {
        event.preventDefault();
        this.setState({
          showBTC: false,
          showETH: false,
          showXMR: false,
          showBCH: true,
          showZEC: false
        })
      }

      showZEC = event =>  {
        event.preventDefault();
        this.setState({
          showBTC: false,
          showETH: false,
          showXMR: false,
          showBCH: false,
          showZEC: true
        })
      }

      
      render() {

        let differenceBTC = (this.state.priceBTC - this.state.lastBTC).toFixed(2)
        let differencePercBTC = (((this.state.priceBTC - this.state.lastBTC) / this.state.lastBTC) * 100)
        let differenceETH = (this.state.priceETH - this.state.lastETH).toFixed(2)
        let differencePercETH = (((this.state.priceETH - this.state.lastETH) / this.state.lastETH) * 100)
        let differenceXMR = (this.state.priceXMR - this.state.lastXMR).toFixed(2)
        let differencePercXMR = (((this.state.priceXMR - this.state.lastXMR) / this.state.lastXMR) * 100)
        let differenceBCH = (this.state.priceBCH - this.state.lastBCH).toFixed(2)
        let differencePercBCH = (((this.state.priceBCH - this.state.lastBCH) / this.state.lastBCH) * 100)
        let differenceZEC = (this.state.priceZEC - this.state.lastZEC).toFixed(2)
        let differencePercZEC = (((this.state.priceZEC - this.state.lastZEC) / this.state.lastZEC) * 100)
        console.log (differenceBTC, differenceBCH, differenceETH, differenceXMR, differenceZEC)
        
            

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
            showBTC,
            showETH,
            showXMR,
            showBCH,
            showZEC
            
        } = this.state;

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else if (differenceBTC === 'null'){
          return <div id='reload'>Please refresh the page if this is your first time visiting.</div>
        } else if (this.state.showBTC == true){
          return (
          <>
            <button onClick={this.showBTC}>BTC</button>
            <button onClick={this.showETH}>ETH</button>
            <button onClick={this.showXMR}>XMR</button>
            <button onClick={this.showBCH}>BCH</button>
            <button onClick={this.showZEC}>ZEC</button>
            <div className='text-container'>
            <h2 className='btc-price'> Bitcoin's Price has changed by ${differenceBTC} ({parseFloat(differencePercBTC).toFixed(4)}%)  </h2>
            <h2 className='btc-last'> It was work ${this.state.lastBTC} the last time you checked</h2> 
            </div>
            <div className='table-container'>         
        <table className='table' >
        <thead>
        <tr>
            <th className='chart-header' scope='col'>Coin/Token</th>
            <th className='chart-header' scope='col'>Price</th>
            <th className='chart-header' scope='col'>24h High</th>
            <th className='chart-header' scope='col'>24h Low</th>
            <th className='chart-header' scope='col'>24h Volume</th>
            <th className='chart-header' scope='col'>Month Average</th>
            <th className='chart-header' scope='col'>Month Difference</th>            
        </tr>
        </thead>
        <tbody>
        <tr>
            <th className='coin-text' scope='row'>BTC</th>
            <td className='price-text' >${priceBTC}</td>
            <td className='price-text' >${highBTC}</td>
            <td className='price-text' >${lowBTC}</td>
            <td className='price-text' >${volBTC}</td>
            <td className='price-text' >${avgMonthBTC}</td>
            <td className='price-text' >{monthPercentBTC}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>ETH</th>
            <td className='price-text' >${priceETH}</td>
            <td className='price-text' >${highETH}</td>
            <td className='price-text' >${lowETH}</td>
            <td className='price-text' >${volETH}</td>
            <td className='price-text' >${avgMonthETH}</td>
            <td className='price-text' >{monthPercentETH}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>XMR</th>
            <td className='price-text' >${priceXMR}</td>
            <td className='price-text' >${highXMR}</td>
            <td className='price-text' >${lowXMR}</td>
            <td className='price-text' >${volXMR}</td>
            <td className='price-text' >${avgMonthXMR}</td>
            <td className='price-text' >{monthPercentXMR}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>BCH</th>
            <td className='price-text' >${priceBCH}</td>
            <td className='price-text' >${highBCH}</td>
            <td className='price-text' >${lowBCH}</td>
            <td className='price-text' >${volBCH}</td>
            <td className='price-text' >${avgMonthBCH}</td>
            <td className='price-text' >{monthPercentBCH}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>ZEC</th>
            <td className='price-text' >${priceZEC}</td>
            <td className='price-text' >${highZEC}</td>
            <td className='price-text' >${lowZEC}</td>
            <td className='price-text' >${volZEC}</td>
            <td className='price-text' >${avgMonthZEC}</td>
            <td className='price-text' >{monthPercentZEC}%</td>           
        </tr>
        </tbody>
        </table>
        </div>
          </>
          )
        } 
        else if (this.state.showETH == true) {
          return(
            <>
            <button onClick={this.showBTC}>BTC</button>
            <button onClick={this.showETH}>ETH</button>
            <button onClick={this.showXMR}>XMR</button>
            <button onClick={this.showBCH}>BCH</button>
            <button onClick={this.showZEC}>ZEC</button>
            <div className='text-container'>
            <h2 className='eth-price'> Ethereum's Price has changed by ${differenceETH} ({parseFloat(differencePercETH).toFixed(4)}%)</h2>
            <h2 className='eth-last'> It was work ${this.state.lastETH} the last time you checked</h2>
            </div>
            <div className='table-container'>         
        <table className='table' >
        <thead>
        <tr>
            <th className='chart-header' scope='col'>Coin/Token</th>
            <th className='chart-header' scope='col'>Price</th>
            <th className='chart-header' scope='col'>24h High</th>
            <th className='chart-header' scope='col'>24h Low</th>
            <th className='chart-header' scope='col'>24h Volume</th>
            <th className='chart-header' scope='col'>Month Average</th>
            <th className='chart-header' scope='col'>Month Difference</th>            
        </tr>
        </thead>
        <tbody>
        <tr>
            <th className='coin-text' scope='row'>BTC</th>
            <td className='price-text' >${priceBTC}</td>
            <td className='price-text' >${highBTC}</td>
            <td className='price-text' >${lowBTC}</td>
            <td className='price-text' >${volBTC}</td>
            <td className='price-text' >${avgMonthBTC}</td>
            <td className='price-text' >{monthPercentBTC}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>ETH</th>
            <td className='price-text' >${priceETH}</td>
            <td className='price-text' >${highETH}</td>
            <td className='price-text' >${lowETH}</td>
            <td className='price-text' >${volETH}</td>
            <td className='price-text' >${avgMonthETH}</td>
            <td className='price-text' >{monthPercentETH}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>XMR</th>
            <td className='price-text' >${priceXMR}</td>
            <td className='price-text' >${highXMR}</td>
            <td className='price-text' >${lowXMR}</td>
            <td className='price-text' >${volXMR}</td>
            <td className='price-text' >${avgMonthXMR}</td>
            <td className='price-text' >{monthPercentXMR}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>BCH</th>
            <td className='price-text' >${priceBCH}</td>
            <td className='price-text' >${highBCH}</td>
            <td className='price-text' >${lowBCH}</td>
            <td className='price-text' >${volBCH}</td>
            <td className='price-text' >${avgMonthBCH}</td>
            <td className='price-text' >{monthPercentBCH}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>ZEC</th>
            <td className='price-text' >${priceZEC}</td>
            <td className='price-text' >${highZEC}</td>
            <td className='price-text' >${lowZEC}</td>
            <td className='price-text' >${volZEC}</td>
            <td className='price-text' >${avgMonthZEC}</td>
            <td className='price-text' >{monthPercentZEC}%</td>           
        </tr>
        </tbody>
        </table>
        </div>
          </>
          )
        }         
        else if (this.state.showXMR == true) {
          return(
            <>
            <button onClick={this.showBTC}>BTC</button>
            <button onClick={this.showETH}>ETH</button>
            <button onClick={this.showXMR}>XMR</button>
            <button onClick={this.showBCH}>BCH</button>
            <button onClick={this.showZEC}>ZEC</button>
            <div className='text-container'>
            <h2 className='xmr-price'> Monero's Price has changed by ${differenceXMR} ({parseFloat(differencePercXMR).toFixed(4)}%)  </h2>
            <h2 className='xmr-last'> It was work ${this.state.lastXMR} the last time you checked</h2>
            </div>
            <div className='table-container'>         
        <table className='table' >
        <thead>
        <tr>
            <th className='chart-header' scope='col'>Coin/Token</th>
            <th className='chart-header' scope='col'>Price</th>
            <th className='chart-header' scope='col'>24h High</th>
            <th className='chart-header' scope='col'>24h Low</th>
            <th className='chart-header' scope='col'>24h Volume</th>
            <th className='chart-header' scope='col'>Month Average</th>
            <th className='chart-header' scope='col'>Month Difference</th>            
        </tr>
        </thead>
        <tbody>
        <tr>
            <th className='coin-text' scope='row'>BTC</th>
            <td className='price-text' >${priceBTC}</td>
            <td className='price-text' >${highBTC}</td>
            <td className='price-text' >${lowBTC}</td>
            <td className='price-text' >${volBTC}</td>
            <td className='price-text' >${avgMonthBTC}</td>
            <td className='price-text' >{monthPercentBTC}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>ETH</th>
            <td className='price-text' >${priceETH}</td>
            <td className='price-text' >${highETH}</td>
            <td className='price-text' >${lowETH}</td>
            <td className='price-text' >${volETH}</td>
            <td className='price-text' >${avgMonthETH}</td>
            <td className='price-text' >{monthPercentETH}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>XMR</th>
            <td className='price-text' >${priceXMR}</td>
            <td className='price-text' >${highXMR}</td>
            <td className='price-text' >${lowXMR}</td>
            <td className='price-text' >${volXMR}</td>
            <td className='price-text' >${avgMonthXMR}</td>
            <td className='price-text' >{monthPercentXMR}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>BCH</th>
            <td className='price-text' >${priceBCH}</td>
            <td className='price-text' >${highBCH}</td>
            <td className='price-text' >${lowBCH}</td>
            <td className='price-text' >${volBCH}</td>
            <td className='price-text' >${avgMonthBCH}</td>
            <td className='price-text' >{monthPercentBCH}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>ZEC</th>
            <td className='price-text' >${priceZEC}</td>
            <td className='price-text' >${highZEC}</td>
            <td className='price-text' >${lowZEC}</td>
            <td className='price-text' >${volZEC}</td>
            <td className='price-text' >${avgMonthZEC}</td>
            <td className='price-text' >{monthPercentZEC}%</td>           
        </tr>
        </tbody>
        </table>
        </div>
          </>
          )
        }
        else if (this.state.showBCH == true) {
          return(
            <>
            <button onClick={this.showBTC}>BTC</button>
            <button onClick={this.showETH}>ETH</button>
            <button onClick={this.showXMR}>XMR</button>
            <button onClick={this.showBCH}>BCH</button>
            <button onClick={this.showZEC}>ZEC</button>
            <div className='text-container'>
            <h2 className='bch-price'> Bitcoin Cash's Price has changed by ${differenceBCH} ({parseFloat(differencePercBCH).toFixed(4)}%)  </h2>
            <h2 className='bch-last'> It was work ${this.state.lastBCH} the last time you checked}</h2>
            </div>
            <div className='table-container'>         
        <table className='table' >
        <thead>
        <tr>
            <th className='chart-header' scope='col'>Coin/Token</th>
            <th className='chart-header' scope='col'>Price</th>
            <th className='chart-header' scope='col'>24h High</th>
            <th className='chart-header' scope='col'>24h Low</th>
            <th className='chart-header' scope='col'>24h Volume</th>
            <th className='chart-header' scope='col'>Month Average</th>
            <th className='chart-header' scope='col'>Month Difference</th>            
        </tr>
        </thead>
        <tbody>
        <tr>
            <th className='coin-text' scope='row'>BTC</th>
            <td className='price-text' >${priceBTC}</td>
            <td className='price-text' >${highBTC}</td>
            <td className='price-text' >${lowBTC}</td>
            <td className='price-text' >${volBTC}</td>
            <td className='price-text' >${avgMonthBTC}</td>
            <td className='price-text' >{monthPercentBTC}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>ETH</th>
            <td className='price-text' >${priceETH}</td>
            <td className='price-text' >${highETH}</td>
            <td className='price-text' >${lowETH}</td>
            <td className='price-text' >${volETH}</td>
            <td className='price-text' >${avgMonthETH}</td>
            <td className='price-text' >{monthPercentETH}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>XMR</th>
            <td className='price-text' >${priceXMR}</td>
            <td className='price-text' >${highXMR}</td>
            <td className='price-text' >${lowXMR}</td>
            <td className='price-text' >${volXMR}</td>
            <td className='price-text' >${avgMonthXMR}</td>
            <td className='price-text' >{monthPercentXMR}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>BCH</th>
            <td className='price-text' >${priceBCH}</td>
            <td className='price-text' >${highBCH}</td>
            <td className='price-text' >${lowBCH}</td>
            <td className='price-text' >${volBCH}</td>
            <td className='price-text' >${avgMonthBCH}</td>
            <td className='price-text' >{monthPercentBCH}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>ZEC</th>
            <td className='price-text' >${priceZEC}</td>
            <td className='price-text' >${highZEC}</td>
            <td className='price-text' >${lowZEC}</td>
            <td className='price-text' >${volZEC}</td>
            <td className='price-text' >${avgMonthZEC}</td>
            <td className='price-text' >{monthPercentZEC}%</td>           
        </tr>
        </tbody>
        </table>
        </div>
          </>
          )
        } 
        else if (this.state.showZEC == true) {
          return(
            <>
            <button onClick={this.showBTC}>BTC</button>
            <button onClick={this.showETH}>ETH</button>
            <button onClick={this.showXMR}>XMR</button>
            <button onClick={this.showBCH}>BCH</button>
            <button onClick={this.showZEC}>ZEC</button>
            <div className='text-container'>
            <h2 className='zec-price'> Z-Cash's Price has changed by ${differenceZEC} ({parseFloat(differencePercZEC).toFixed(4)}%)  </h2>
            <h2 className='zec-last'> It was work ${this.state.lastZEC} the last time you checked</h2>
            </div> 
            <div className='table-container'>         
        <table className='table' >
        <thead>
        <tr>
            <th className='chart-header' scope='col'>Coin/Token</th>
            <th className='chart-header' scope='col'>Price</th>
            <th className='chart-header' scope='col'>24h High</th>
            <th className='chart-header' scope='col'>24h Low</th>
            <th className='chart-header' scope='col'>24h Volume</th>
            <th className='chart-header' scope='col'>Month Average</th>
            <th className='chart-header' scope='col'>Month Difference</th>            
        </tr>
        </thead>
        <tbody>
        <tr>
            <th className='coin-text' scope='row'>BTC</th>
            <td className='price-text' >${priceBTC}</td>
            <td className='price-text' >${highBTC}</td>
            <td className='price-text' >${lowBTC}</td>
            <td className='price-text' >${volBTC}</td>
            <td className='price-text' >${avgMonthBTC}</td>
            <td className='price-text' >{monthPercentBTC}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>ETH</th>
            <td className='price-text' >${priceETH}</td>
            <td className='price-text' >${highETH}</td>
            <td className='price-text' >${lowETH}</td>
            <td className='price-text' >${volETH}</td>
            <td className='price-text' >${avgMonthETH}</td>
            <td className='price-text' >{monthPercentETH}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>XMR</th>
            <td className='price-text' >${priceXMR}</td>
            <td className='price-text' >${highXMR}</td>
            <td className='price-text' >${lowXMR}</td>
            <td className='price-text' >${volXMR}</td>
            <td className='price-text' >${avgMonthXMR}</td>
            <td className='price-text' >{monthPercentXMR}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>BCH</th>
            <td className='price-text' >${priceBCH}</td>
            <td className='price-text' >${highBCH}</td>
            <td className='price-text' >${lowBCH}</td>
            <td className='price-text' >${volBCH}</td>
            <td className='price-text' >${avgMonthBCH}</td>
            <td className='price-text' >{monthPercentBCH}%</td>           
        </tr>
        <tr>
            <th className='coin-text' scope='row'>ZEC</th>
            <td className='price-text' >${priceZEC}</td>
            <td className='price-text' >${highZEC}</td>
            <td className='price-text' >${lowZEC}</td>
            <td className='price-text' >${volZEC}</td>
            <td className='price-text' >${avgMonthZEC}</td>
            <td className='price-text' >{monthPercentZEC}%</td>           
        </tr>
        </tbody>
        </table>
        </div>           
          </>
          )
        }            
      }
};

export default Table