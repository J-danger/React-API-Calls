import React, {Component} from "react"

class ApiCatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
         error: null,
         isLoaded: false,
         last: []
        };
      }

      componentDidMount() {        
              this.setState({
                isLoaded: true,               
                last: localStorage.getItem("last")
              });  
          }
    
      render() {
          let { last } = this.state;
          // console.log("Last", localStorage.getItem("last", last))
          
          return(
            <>
              <h2 id="lastCheck">
                It was worth ${parseFloat(localStorage.getItem("last", last)).toFixed(2)} last time you checked.
              </h2>
            </>
          
          )
        }
}

export default ApiCatch