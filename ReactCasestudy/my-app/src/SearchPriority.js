import React,{Component} from 'react'
import axios from 'axios'

 

class SearchPriority extends Component{
    constructor (){
        super()
    this.state={
       tasks:[],
        priority:''

    }
    this.changeHandler=this.changeHandler.bind(this);
    this.submitHandler=this.submitHandler.bind(this);
   } 
   changeHandler(e){
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler (e){
    e.preventDefault()
    console.log(this.state)
  
    axios.get('http://localhost:8080/tasks/pri/'+this.state.priority)
    .then(response=>this.setState({tasks:response.data})
        
    )
    .catch(error=>{
        console.log(error)
    })
  
   }

   render(){
    const{priority} = this.state
    return(
        <div>
        <form onSubmit={this.submitHandler}>
            <table>
                
                 

                    <div class="form-group">
                  <label for="name">Priority</label>
                  <input type="text"class ="form-control" name="priority" value={priority} onChange={this.changeHandler} />
                  </div>
                  
                  <button type="submit"class="btn btn-success">submit</button>
                <div>
                  <ul>{this.state.tasks.map(task=>(<h4>
                   <li>TaskID:{task.task_ID}</li>
                   <li>Owner_ID:{task.owner_ID}</li>
                   <li>creator_ID:{task.creator_ID}</li>
                   <li>name:{task.name}</li>
                   <li>description:{task.description}</li>
                   <li>status:{task.status}</li>
                   <li>priority:{task.priority}</li>
                   <li>notes:{task.notes}</li>
                   <li>isBookmarked:{task.isBookmarked.toString()}</li>
                   <li>created_On:{task.created_On}</li>
                   <li>status_Changed_On:{task.status_Changed_On}</li>
                   </h4>))}
                
                </ul>
                </div>
                  </table>
                  </form>
                  </div>
                 
                  

    )
}


}
export default SearchPriority