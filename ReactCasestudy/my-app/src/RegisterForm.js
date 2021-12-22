import React from 'react'

class RegisterForm extends React.Component{
    constructor(props){
        console.log("componet updated")
        super(props)
        this.state={userName:'',comments:'',topics:'react'}
    }
    handleUserName=(event)=>{
        this.setState({userName: event.target.value})
    }
    handleComment=(event)=>{
        this.setState({comments:event.target.value})
    }
    handleTopic=(event)=>{
        this.setState({comments:event.target.value})
    }

    handleSubmit=(event)=>{
        console.log(`${this.state.userName}`)
        console.log(`${this.state.comments}`)
        event.preventDefault()
    }
    componentDidMount(){
        console.log("Component mounted")
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    UserName:<input type='text' value={this.state.userName} onChange={this.handleUserName} />

                </div>
                <div>
                    Comments:<textarea value={this.state.comments} onChange={this.handleComment} />
                </div>
                <div>
                    Topics:
                    <select value={this.state.topics} onChange={this.handleTopic}>
                        <option value='React'>React</option>
                        <option value='angular'>angular</option>
                        <option value='js'>js</option>
                    </select>
                </div>
                <button type="submit" >submit</button>
            </form>
        )
    }

}

export default RegisterForm