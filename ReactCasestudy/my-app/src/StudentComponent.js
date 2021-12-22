
import React,{Component} from 'react';

class StudentComponent extends Component{

    render(){
        return(
            <div>
               <h1> {this.props.stdname} {this.props.stdid} {this.props.stdage}</h1>
               
            </div>
        )
    }

}
export default StudentComponent;