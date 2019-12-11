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
        fetch("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                current: result.last.toFixed(2),
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
            let last = localStorage.getItem("currentPrice")  
            let lastTime = localStorage.getItem("lastTime")
            let lastDate = localStorage.getItem("lastDate")
            let difference = (((current - lastPrice) / lastPrice) * 100)
            localStorage.setItem("last", last )         
            localStorage.setItem("currentPrice", current)    
           
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else if (lastPrice === "null"){
              return <div id="reload">Please refresh the page if this is your first time visiting.</div>
            }            
            else {
              return (
                <div className="text-container">                    
                  <h2> Bitcoin's Price has changed by {parseFloat(difference).toFixed(4)}%</h2>
                  <h2>It was worth ${this.state.lastPrice} the last time you checked at {lastTime} on {lastDate}   </h2>  
                </div>
              );
            }
          }
}

export default ApiCall