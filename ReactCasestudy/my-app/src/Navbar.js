import React from 'react';
import {Route,Link,BrowserRouter as Router,Routes} from 'react-router-dom';


const Navbar = () => {
    return(
        <div className='header'>
            <div className='header-right'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/GetTaskdata">Tasklist</Link>
                </li>
                
                <li>
                    <Link to="/PostTask">AddTask</Link>
                </li>
                <li>
                <Link to="/SetPriority">SetPriority</Link>
                </li>

                <li>
                    <Link to="/SetStatus">SetStatus</Link>
                </li>

                <li>
                    <Link to="/AssignTask">Assigntask</Link>
                </li>

                <li>
                    <Link to="/SetNotes">SetNotes</Link>
                </li>

                <li>
                    <Link to="/SetDescription">SetDescription</Link>
                </li>

                <li>
                    <Link to="/SearchTask">SearchTask</Link>
                </li>
            </ul>
            </div>
    
        </div>
    )
   
}
export default Navbar