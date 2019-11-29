import React, {Component} from "react"

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
         error: null,
         isLoaded: false,
         update: []
        };
      }
    
      render() {
        //   let { update } = this.state.items;
         
        //   return(
        //     <>
        //         <h2>Updated ${localStorage.getItem("update", update)} </h2>
        //     </>
        let { update } = this.state;
        console.log("this one", update)
        return(
          <>
              <h2>update time you checked, it was ${localStorage.getItem("update", update)} </h2>
          </>
          )
        }
}

export default Update