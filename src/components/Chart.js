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
                priceBTC: result.last.toFixed(2),
                highBTC: result.high.toFixed(2),
                lowBTC: result.low.toFixed(2),
                volBTC: result.volume.toFixed(2),
                avgMonthBTC: result.averages.month.toFixed(2),
                monthPercentBTC: result.changes.percent.month.toFixed(2)
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
                priceETH: result.last.toFixed(2),
                highETH: result.high.toFixed(2),
                lowETH: result.low.toFixed(2),
                volETH: result.volume.toFixed(2),
                avgMonthETH: result.averages.month.toFixed(2),
                monthPercentETH: result.changes.percent.month.toFixed(2)
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
                priceXMR: result.last.toFixed(2),
                highXMR: result.high.toFixed(2),
                lowXMR: result.low.toFixed(2),
                volXMR: result.volume.toFixed(2),
                avgMonthXMR: result.averages.month.toFixed(2),
                monthPercentXMR: result.changes.percent.month.toFixed(2)
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
                priceBCH: result.last.toFixed(2),
                highBCH: result.high.toFixed(2),
                lowBCH: result.low.toFixed(2),
                volBCH: result.volume.toFixed(2),
                avgMonthBCH: result.averages.month.toFixed(2),
                monthPercentBCH: result.changes.percent.month.toFixed(2)
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
                priceZEC: result.last.toFixed(2),
                highZEC: result.high.toFixed(2),
                lowZEC: result.low.toFixed(2),
                volZEC: result.volume.toFixed(2),
                avgMonthZEC: result.averages.month.toFixed(2),
                monthPercentZEC: result.changes.percent.month.toFixed(2)
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
        <tr>
            <th class="price-text" scope="row">XMR</th>
            <td class="price-text" >${priceXMR}</td>
            <td class="price-text" >${highXMR}</td>
            <td class="price-text" >${lowXMR}</td>
            <td class="price-text" >${volXMR}</td>
            <td class="price-text" >${avgMonthXMR}</td>
            <td class="price-text" >{monthPercentXMR}%</td>           
        </tr>
        <tr>
            <th class="price-text" scope="row">BCH</th>
            <td class="price-text" >${priceBCH}</td>
            <td class="price-text" >${highBCH}</td>
            <td class="price-text" >${lowBCH}</td>
            <td class="price-text" >${volBCH}</td>
            <td class="price-text" >${avgMonthBCH}</td>
            <td class="price-text" >{monthPercentBCH}%</td>           
        </tr>
        <tr>
            <th class="price-text" scope="row">ZEC</th>
            <td class="price-text" >${priceZEC}</td>
            <td class="price-text" >${highZEC}</td>
            <td class="price-text" >${lowZEC}</td>
            <td class="price-text" >${volZEC}</td>
            <td class="price-text" >${avgMonthZEC}</td>
            <td class="price-text" >{monthPercentZEC}%</td>           
        </tr>



        
            </tbody>
        </table>
          );
        }
      }
}

export default Chart