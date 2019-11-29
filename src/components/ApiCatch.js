import React, {Component} from "react"

class apiCatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
         error: null,
         isLoaded: false,
         last: []
        };
      }
    
      render() {
          let { last } = this.state;
          console.log("Last Price", localStorage.getItem("last", last))
          return(
            <>
            <h2>
            Last time you checked, it was ${parseFloat(localStorage.getItem("last", last)).toFixed(2)} 
            </h2>
            </>
          
          )
        }
}

export default apiCatch