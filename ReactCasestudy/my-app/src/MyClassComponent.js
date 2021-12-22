import React,{ Component } from "react";
import PropsExample from "./PropsExample";
import ClassComponent from "./ClassComponent"
import StudentComponent from "./StudentComponent";

class MyClassComponent extends Component{
    render(){
        return(
            <div>
                <h1>This is myclasscomponent works</h1>
                <PropsExample name="Sushma" age = {21}>
                          <p>This is child tag</p>
                </PropsExample>
                <PropsExample name="sush" /><br></br>
                <ClassComponent name="sushaa" age={21}></ClassComponent><br></br>
                <StudentComponent stdname="Samatha" stdid={112} stdage={21}></StudentComponent>
                <StudentComponent stdname="Priyaka" stdid={113} stdage={21}></StudentComponent>
                <StudentComponent stdname="Vydehi" stdid={114}  stdage={22}></StudentComponent>
            </div>  
                
            
        )
    }
}

export default MyClassComponent;