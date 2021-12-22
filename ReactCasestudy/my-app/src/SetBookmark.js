import React,{Component} from 'react'
import axios from 'axios'

class SetBookmark extends Component{
    constructor(props){
        super()
        this.state={

            task_ID:'',
            isBookmarked:''
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
        axios.get('http://localhost:8080/tasks/'+this.state.task_ID+'/book/'+this.state.isBookmarked)
        .then(response=>this.setState({tasks:response.data})
            
        )
        .catch(error=>{
            console.log(error)
        })
      
    }

    render(){
        const{task_ID, isBookmarked} = this.state

        return(
            <div>
              <form onSubmit={this.submitHandler}>
                  <table>
                      
                       

                          <div class="form-group">
                        <label for="name">TaskID</label>
                        <input type="text"class ="form-control" name="task_ID" value={task_ID} onChange={this.changeHandler} />
                        </div>
                      

                     
                    <div class="form-group">
                    <label for="name">isBookmarked</label>
                    <input type="text" class ="form-control"name="isBookmarked" value={isBookmarked} onChange={this.changeHandler} />
                    </div>
                    

                    <button type="submit"class="btn btn-success">submit</button>


                        
                  </table>
              </form>
            </div>
        )
    }


}

export default SetBookmark