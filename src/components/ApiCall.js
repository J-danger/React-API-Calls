import React, {Component} from "react"


class ApiCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          current: [],
          lastPrice: [],
         
        };
      }     
    
      componentDidMount() {
        fetch("https://api.kraken.com/0/public/Ticker?pair=XBTUSD")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                current: result.result.XXBTZUSD.a[0],
                lastPrice: localStorage.getItem("last"),                
              });              
            },        
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
            )            
          }
          
      
          render() {
            let { error, isLoaded, current, lastPrice  } = this.state;
            let last = localStorage.getItem("newLast")  
            let difference = (((current - lastPrice) / lastPrice) * 100)
            localStorage.setItem("last", last )         
            localStorage.setItem("newLast", current)    
           
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else if (lastPrice === "null"){
              return <div id="reload">Please refresh the page if this is your first time visiting.</div>
            }            
            else {
              return (
                <>
                  <div className="difference-container">
                    <div className="difference">
                      <h2> Bitcoin's Price has changed by {parseFloat(difference).toFixed(2)}%</h2>
                    </div>
                  </div>
                                
                  <h2 id="bitcoinPrice">Current Price: ${parseFloat(current).toFixed(2)}</h2>   
                </>
              );
            }
          }
}

export default ApiCall