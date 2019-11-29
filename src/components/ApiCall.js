import React, {Component} from "react"


class ApiCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          lastPrice: []
        };
      }
    
      componentDidMount() {
        fetch("https://api.kraken.com/0/public/Ticker?pair=XBTUSD")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.result.XXBTZUSD.a[0],
                lastPrice: localStorage.getItem("last")
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
          }
          
          
          render() {
            let { error, isLoaded, items, lastPrice  } = this.state;
            let last = localStorage.getItem("newLast")  
            const difference = items - lastPrice 
            localStorage.setItem("last", last )         
            localStorage.setItem("newLast", items)    
           
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else {
              return (
                <>
                  <div className="difference-container">
                    <div className="difference">
                      <h2> Bitcoin's Price has changed by ${parseFloat(difference).toFixed(2)}</h2>
                    </div>
                  </div>
                  <h2 id="bitcoinPrice">Current Price: ${parseFloat(items).toFixed(2)}</h2>
                  
                </>
              );
            }
          }
}

export default ApiCall