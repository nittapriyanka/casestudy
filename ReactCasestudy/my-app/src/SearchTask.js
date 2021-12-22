import React,{Component} from 'react'
import axios from 'axios'

class SearchTask extends Component{
    constructor (){
    super()
    this.state={
       task:'',
        task_ID:''

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
  
    axios.get('http://localhost:8080/tasks/'+this.state.task_ID)
    .then(response=>this.setState({task:response.data})
        
    )
    .catch(error=>{
        console.log(error)
    })
  
}

render(){
    const{task_ID} = this.state
    return(
        <div>
        <form onSubmit={this.submitHandler}>
            <table>
                
                 

                    <div class="form-group">
                  <label for="name">TaskID</label>
                  <input type="text"class ="form-control" name="task_ID" value={task_ID} onChange={this.changeHandler} />
                  </div>
                  
                  <button type="submit"class="btn btn-success">submit</button>
                  <div>
                      <ul>
                      <li>TaskID:{this.state.task.task_ID}</li>
                       <li>Owner_ID:{this.state.task.owner_ID}</li>
                       <li>Creator_ID:{this.state.task.creator_ID}</li>
                       <li>Name:{this.state.task.name}</li>
                       <li>Description:{this.state.task.description}</li>
                       <li>Status:{this.state.task.status}</li>
                       <li>Priority:{this.state.task.priority}</li>
                       <li>Notes:{this.state.task.notes}</li>
                      
                       <li>Created_On:{this.state.task.created_On}</li>
                       <li>Status_Changed_On:{this.state.task.status_Changed_On}</li>
                      </ul>
                  </div>
                  
                  </table>
                  </form>
                  </div>
                 
                  

    )
}


}
export default SearchTask









    

        

