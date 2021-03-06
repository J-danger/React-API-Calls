import React, {Component} from 'react'

class Clock extends Component {

    constructor() {
        super();
        this.state = { 
            time: new Date(),
           
        
        }; 
    }

    componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000);
        this.setState({            
            lastDate: localStorage.getItem('lastDate'),
            lastTime: localStorage.getItem('lastTime'),                
          });              
          let { time } = this.state;
      localStorage.setItem('lastDate', time.toLocaleDateString()) 
      localStorage.setItem('lastTime', time.toLocaleTimeString()) 
          
        }
        
        componentWillUnmount() { // delete the interval just before component is removed
            clearInterval(this.update);
    }
    
    render() {
        let { time } = this.state; // retrieve the time from state

        return (
        <div className='Clock'>
            
            <h2>
                {/* print the string prettily */}
                {time.toLocaleTimeString()}
            </h2>
            <h2>
            
            </h2>
        </div>);
    }
}

export default Clock