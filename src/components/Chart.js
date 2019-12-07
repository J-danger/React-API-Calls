import React, { Component } from "react"

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          priceBTC: []
        };
      }

      componentDidMount() {
        fetch("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                priceBTC: result.last,
                highBTC: result.high,
                lowBTC: result.low,
                volBTC: result.volume,
                avgMonthBTC: result.averages.month,
                monthPercentBTC: result.changes.percent.month
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
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
                priceETH: result.last,
                highETH: result.high,
                lowETH: result.low,
                volETH: result.volume,
                avgMonthETH: result.averages.month,
                monthPercentETH: result.changes.percent.month
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
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
                lastPriceXMR: result.last
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
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
                lastPriceBCH: result.last
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
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
                lastPriceZEC: result.last
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
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
            lastPriceETH, 
            lastPriceXMR, 
            lastPriceBCH, 
            lastPriceZEC 
        } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (            
       <table class="table">
        <thead>
            <tr>
                <th class="price-text" scope="col">Coin/Token</th>
                <th class="price-text" scope="col">Price</th>
                <th class="price-text" scope="col">24h High</th>
                <th class="price-text" scope="col">24h Low</th>
                <th class="price-text" scope="col">24h Volume</th>
                <th class="price-text" scope="col">Month Average</th>
                <th class="price-text" scope="col">Month Difference</th>
                
            </tr>
        </thead>
        <tbody>
        <tr>
            <th class="price-text" scope="row">BTC</th>
            <td class="price-text" >${priceBTC}</td>
            <td class="price-text" >${highBTC}</td>
            <td class="price-text" >${lowBTC}</td>
            <td class="price-text" >${volBTC}</td>
            <td class="price-text" >${avgMonthBTC}</td>
            <td class="price-text" >{monthPercentBTC}%</td>           
        </tr>
        <tr>
            <th class="price-text" scope="row">ETH</th>
            <td class="price-text" >${priceETH}</td>
            <td class="price-text" >${highETH}</td>
            <td class="price-text" >${lowETH}</td>
            <td class="price-text" >${volETH}</td>
            <td class="price-text" >${avgMonthETH}</td>
            <td class="price-text" >{monthPercentETH}%</td>
           
        </tr>



        
            </tbody>
        </table>
          );
        }
      }
}

export default Chart