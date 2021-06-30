import React, {Component} from 'react';

class SimpleEvents extends Component {
    handleClick() {
        console.log("Test")
    }
    handleChange() {
        console.log("user changed input")
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted")
        
    }
    render() {
        return(
            <div>
            <form onSubmit= {this.handleSubmit}>
                <button onClick = {this.handleClick} >Click Me!</button>
                <input onChange= {this.handleChange} type="text" placeholder="Enter some text!"/>
            </form>
            </div>
        )
    }
}
export default SimpleEvents;