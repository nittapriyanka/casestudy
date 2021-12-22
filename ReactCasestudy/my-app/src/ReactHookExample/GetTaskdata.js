import React,{Component} from 'react';
import axios from 'axios';

class GetTaskdata extends Component{
    constructor () {
        super()
        this.state={
            tasks:[]
            
   
    
        }
        this.handleClick=this.handleClick.bind(this)
}
    handleClick () {
       axios.get('http://localhost:8080/tasks')
          .then(response => this.setState({tasks:response.data}))
         // console.log(response);

}

      render(){
          return(
             <div>
                   <button className='button' onClick={this.handleClick}>TasKlist</button>
                   <ul>{this.state.tasks.map(task=>(<h4>
                       <li>TaskID:{task.task_ID}</li>
                       <li>Owner_ID:{task.owner_ID}</li>
                       <li>Creator_ID:{task.creator_ID}</li>
                       <li>Name:{task.name}</li>
                       <li>Description:{task.description}</li>
                       <li>Status:{task.status}</li>
                       <li>Priority:{task.priority}</li>
                       <li>Notes:{task.notes}</li>
                       <li>IsBookmarked:{task.isBookmarked.toString()}</li>
                       <li>Created_On:{task.created_On}</li>
                       <li>Status_Changed_On:{task.status_Changed_On}</li>
                       </h4>))}
                    
                    </ul>
            </div>
    )
}
}
export default GetTaskdata;