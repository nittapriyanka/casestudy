import React,{Component} from 'react'
import axios from 'axios'

class SetDescription extends Component{
    constructor(props){
        super()
        this.state={
           
            task_ID:'',
            description:''
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
        axios.get('http://localhost:8080/tasks/'+this.state.task_ID+'/dd/'+this.state.description)
        .then(response=>this.setState({tasks:response.data})
            
        )
        .catch(error=>{
            console.log(error)
        })
      
    }

    render(){
        const{task_ID, description} = this.state

        return(
            <div>
              <form onSubmit={this.submitHandler}>
                  <table>
                     
                      

                          <div class="form-group">
                        <label for="name">TaskID</label>
                        <input type="text" class ="form-control"name="task_ID" value={task_ID} onChange={this.changeHandler} />
                        </div>
                        

                        
                    <div class="form-group">
                    <label for="name">Description</label>
                    <input type="text" class ="form-control"name="description" value={description} onChange={this.changeHandler} />
                    </div>
                    

                    <button type="submit"class="btn btn-success">submit</button>


                        
                  </table>
              </form>
            </div>
        )
    }


}

export default SetDescription
