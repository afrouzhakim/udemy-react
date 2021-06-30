import React, {Component} from 'react';

class EventAndState extends Component {
    constructor() {
        super();
        this.state = {
            inputText: ""
        }
    }
    handleClick() {
        console.log("Test")
    }
    handleChange = (event) => {
       this.setState({
           inputText : event.target.value
       })
        console.log(this.state.inputText)
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
export default EventAndState;