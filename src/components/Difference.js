import React, {Component} from "react"

class Difference extends Component {
    constructor(props) {
        super(props);
        this.state = {
         error: null,
         isLoaded: false,
         last: []
        };
      }
    
      render() {
       
            const a = localStorage.getItem("last") 
            const difference =  localStorage.getItem("newLast")
         
         console.log("difference ", difference)
         console.log("a Last  ", a)
          return(
            <>
              <h2>
                That is a difference of ${parseFloat().toFixed(2)} 
              </h2>
            </>
          
          )
        }
}

export default Difference