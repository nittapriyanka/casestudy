import React,{Component} from 'react'
import axios from 'axios'

class PostTask extends Component{
    constructor(props){
        super(props)
        this.state={
            task_ID:'',
            owner_ID:'',
            creator_ID:'',
            name:'',
            description:'',
            status:'',
            priority:'',
            notes:'',
            isBookmarked:'',
            created_On:'',
            status_Changed_On:''
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
        axios.post('http://localhost:8080/tasks', this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
      
    }

    render(){
        const{ task_ID,
        owner_ID,
        creator_ID,
        name,
        description,
        status,
        priority,
        notes,
        isBookmarked,
        created_On,
        status_Changed_On}=this.state

        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    
                     <table>    

                    <div class="form-group">
                    <label for="name">TaskID</label>
                    <input type="text"  class ="form-control" name="task_ID" value={task_ID} onChange={this.changeHandler} />
                    </div>
                    
                   
                    

                   
                    <div class="form-group">
                    <label for="name">owner_ID</label>
                    <input type="text"  class ="form-control" name="owner_ID" value={owner_ID} onChange={this.changeHandler} />
                    </div>
                   
                    
                   
                    <div class="form-group">
                    <label for="name">creator_ID</label>
                    <input type="text"  class ="form-control" name="creator_ID" value={creator_ID} onChange={this.changeHandler} />
                    </div>
                    
                    
                    <div class="form-group">
                    <label for="name">name</label>
                    <input type="text" class ="form-control" name="name" value={name} onChange={this.changeHandler} />
                    </div>
                     
                    
                    <div class="form-group">
                    <label for="name">description</label>
                    <input type="text" class ="form-control" name="description" value={description} onChange={this.changeHandler} />
                    </div>
                    
                   
                    <div class="form-group">
                    <label for="name">status</label>
                    <input type="text" class ="form-control" name="status" value={status} onChange={this.changeHandler} />
                    </div>
                    
                      
                   
                    <div class="form-group">
                    <label for="name">priority</label>
                    <input type="text" class ="form-control" name="priority" value={priority} onChange={this.changeHandler} />
                    </div>
                    

                    
                    <div class="form-group">
                    <label for="name">notes</label>
                    <input type="text" class ="form-control" name="notes" value={notes} onChange={this.changeHandler} />
                    </div>
                   
                    
                   
                    <div class="form-group">
                    <label for="name">isBookmarked</label>
                    <input type="text" class ="form-control" name="isBookmarked" value={isBookmarked} onChange={this.changeHandler} />
                    </div>
                   

                   
                    <div class="form-group">
                    <label for="name">created_On</label>
                    <input type="datetime-local" class ="form-control" name="created_On" value={created_On} onChange={this.changeHandler} />
                    </div>
                   

                   
                    <div class="form-group">
                    <label for="name">status_Changed_On</label>
                    <input type="datetime-local" class ="form-control" name="status_Changed_On" value={status_Changed_On} onChange={this.changeHandler} />
                    </div>
                    


                    <button type="submit" class="btn btn-success">submit</button>




                 
                    </table> 
                </form>
            </div>
        )
    }
}

export default PostTask