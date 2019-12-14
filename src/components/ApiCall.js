import React, {Component} from "react"


class ApiCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          current: [],
          lastPrice: [], 
          lastDate: localStorage.getItem("lastDate"),
          lastTime: localStorage.getItem("lastTime"),        
         
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
            let { error, isLoaded, current, lastPrice, lastDate, lastTime } = this.state;
            let last = localStorage.getItem("currentPrice") 
            let difference = (current-lastPrice)           
            let differencePerc = (((current - lastPrice) / lastPrice) * 100)
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
                  <h2> Bitcoin's Price has changed by ${difference.toFixed(2)} ({parseFloat(differencePerc).toFixed(4)}%)</h2>
                  <h2>It was worth ${this.state.lastPrice} the last time you checked at {lastTime} on {lastDate}   </h2>  
                </div>
              );
            }
            
          }
}

export default ApiCall