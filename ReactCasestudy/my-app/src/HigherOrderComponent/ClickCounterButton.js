import React,{Component} from 'react';
import UpdateComponent from './UpdateComponent';

class ClickCountButton extends Component{
    render(){
        const{count,incrementCount}=this.props
        return <button onClick={incrementCount}>Clicked{count} times</button>
    }
}
export default UpdateComponent(ClickCountButton)