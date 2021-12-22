import React,{Component} from 'react'

class StateExample extends Component{
    constructor(){
        super()
        this.state={message:'welcome vistor'}
        this.changeMessage=this.changeMessage.bind(this)
    }
    changeMessage(){
        this.setState({message:'Thank you for subscribe'})
    }
    render(){
        return(
        <div>
        <h1>{this.state.message}</h1>
        <h2>Welcome</h2>
        <button onClick={this.changeMessage}>submit</button>
        </div>
        )
}
}

export default StateExample;