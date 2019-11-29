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
                items: result.result.XXBTZUSD.o
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
        const { error, isLoaded, items } = this.state;
          localStorage.setItem("last", items)
          console.log("this one ", localStorage.setItem("last", items))
            
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else {
              return (
                <>
                  <h2> Hi! Bitcoin is currently worth ${items}</h2>
                  <h2>Last time you checked, it was ${localStorage.getItem("last", items)} </h2>
                
                </>
              );
            }
          }
}

export default apiCall