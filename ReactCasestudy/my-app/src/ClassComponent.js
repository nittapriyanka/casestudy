import React,{Component} from 'react'

class ClassComponent extends Component{
    render(){
        return(
            <div>
               <h1> {this.props.name} </h1>
               <h1> {this.props.age}  </h1>
            </div>
        )
    }
}

export default ClassComponent;