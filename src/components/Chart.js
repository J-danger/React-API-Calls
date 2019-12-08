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
       <table className="table">
        <thead>
        <tr>
            <th className="price-text" scope="col">Coin/Token</th>
            <th className="price-text" scope="col">Price</th>
            <th className="price-text" scope="col">24h High</th>
            <th className="price-text" scope="col">24h Low</th>
            <th className="price-text" scope="col">24h Volume</th>
            <th className="price-text" scope="col">Month Average</th>
            <th className="price-text" scope="col">Month Difference</th>
            
        </tr>
        </thead>
        <tbody>
        <tr>
            <th className="price-text" scope="row">BTC</th>
            <td className="price-text" >${priceBTC}</td>
            <td className="price-text" >${highBTC}</td>
            <td className="price-text" >${lowBTC}</td>
            <td className="price-text" >${volBTC}</td>
            <td className="price-text" >${avgMonthBTC}</td>
            <td className="price-text" >{monthPercentBTC}%</td>           
        </tr>
        <tr>
            <th className="price-text" scope="row">ETH</th>
            <td className="price-text" >${priceETH}</td>
            <td className="price-text" >${highETH}</td>
            <td className="price-text" >${lowETH}</td>
            <td className="price-text" >${volETH}</td>
            <td className="price-text" >${avgMonthETH}</td>
            <td className="price-text" >{monthPercentETH}%</td>           
        </tr>
        <tr>
            <th className="price-text" scope="row">XMR</th>
            <td className="price-text" >${priceXMR}</td>
            <td className="price-text" >${highXMR}</td>
            <td className="price-text" >${lowXMR}</td>
            <td className="price-text" >${volXMR}</td>
            <td className="price-text" >${avgMonthXMR}</td>
            <td className="price-text" >{monthPercentXMR}%</td>           
        </tr>
        <tr>
            <th className="price-text" scope="row">BCH</th>
            <td className="price-text" >${priceBCH}</td>
            <td className="price-text" >${highBCH}</td>
            <td className="price-text" >${lowBCH}</td>
            <td className="price-text" >${volBCH}</td>
            <td className="price-text" >${avgMonthBCH}</td>
            <td className="price-text" >{monthPercentBCH}%</td>           
        </tr>
        <tr>
            <th className="price-text" scope="row">ZEC</th>
            <td className="price-text" >${priceZEC}</td>
            <td className="price-text" >${highZEC}</td>
            <td className="price-text" >${lowZEC}</td>
            <td className="price-text" >${volZEC}</td>
            <td className="price-text" >${avgMonthZEC}</td>
            <td className="price-text" >{monthPercentZEC}%</td>           
        </tr>



        
            </tbody>
        </table>
          );
        }
      }
}

export default Chart