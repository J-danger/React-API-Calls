import React, {Component} from "react"

class Clock extends Component {

    constructor() {
        super();
        this.state = { 
            time: new Date() 
        
        }; 
    }

    componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); 
        let { time } = this.state;
        localStorage.setItem("lastTime", time.toLocaleDateString()) 
    }

    componentWillUnmount() { // delete the interval just before component is removed
        clearInterval(this.update);
    }
    
    render() {
        let { time } = this.state; // retrieve the time from state

        return (
        <div className="Clock">
            
            <h2>
                {/* print the string prettily */}
                {time.toLocaleDateString()}
            </h2>
        </div>);
    }
}

export default Clock