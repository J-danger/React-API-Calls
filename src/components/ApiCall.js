import React, {Component} from "react"

class apiCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("https://api.kraken.com/0/public/Ticker?pair=XBTUSD")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.result.XXBTZUSD.a[0]
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
            let { error, isLoaded, items } = this.state;
            console.log("New price ", items)
            let newLast = localStorage.getItem("newLast", items)
            localStorage.setItem("last", newLast )
            localStorage.setItem("newLast", items)
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else {
              return (
                <>
                  <h2> Hi! Bitcoin is currently worth ${parseFloat(items).toFixed(2)}</h2>
                 
                
                </>
              );
            }
          }
}

export default apiCall