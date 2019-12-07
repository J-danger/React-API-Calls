import React, {Component} from "react"


class ApiCatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
         error: null,
         isLoaded: false,
         lastPrice: [],
         lastTime: localStorage.getItem("lastTime")
        };
      }

      componentDidMount() {        
              this.setState({
                isLoaded: true,               
                lastPrice: localStorage.getItem("last"),                
              });  
           
          }
    
      render() {
        
          let { lastPrice, error, isLoaded } = this.state;          
          if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div></div>;
          } else if (lastPrice === "null"){
            return <></>
          }           
          else {
          return(
            <>    
            
              <h2 id="lastCheck">
                It was worth ${parseFloat(localStorage.getItem("last", lastPrice)).toFixed(2)} last time you checked
              </h2>
            </>
          
          )
        }
      }
}

export default ApiCatch