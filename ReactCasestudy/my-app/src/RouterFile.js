import React from 'react'
import {Route,Link,BrowserRouter as Router,Routes} from 'react-router-dom'
import MyCom from './MyCom'
import StateExample from './StateExample'
import About from './About'
import GetTaskdata from './ReactHookExample/GetTaskdata'
import PostTask from './PostTask'
import SetPriority from './SetPriority'
import SetStatus from './SetStatus'
import AssignTask from './AssignTask'
import SetNotes from './SetNotes'
import SetDescription from './SetDescription'
import SearchTask from './SearchTask'
import Deletetask from './Deletetask'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchStatus from './SearchStatus'
import SetBookmark from './SetBookmark'
import SearchPriority from './SearchPriority'
import SearchTname from './SearchTname'


const routing=(
    <Router>
          
        <div>
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
    
  <ul class="navbar-nav">
        

            
                <li class="nav-item">
                    <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li>
                <Link to="/GetTaskdata" class="nav-link"routerLinkActive="active">Tasklist</Link>
                </li>
                
                
                    <li>
                <Link to="/SetPriority"class="nav-link"routerLinkActive="active">SetPriority</Link>
                </li>

                    <li>
                    <Link to="/SetStatus" class="nav-link"routerLinkActive="active">SetStatus</Link>
                    </li>

                    <li>
                    <Link to="/AssignTask"class="nav-link"routerLinkActive="active">Assigntask</Link>
                    </li>

                    <li>
                    <Link to="/SetNotes"class="nav-link"routerLinkActive="active">SetNotes</Link>
                    </li>

                    <li>
                    <Link to="/SetDescription"class="nav-link"routerLinkActive="active">SetDescription</Link>
                    </li>

                    <li>
                    <Link to="/SetBookmark"class="nav-link"routerLinkActive="active">SetBookmark</Link>
                    </li>

                    <li>
                    <Link to="/SearchTask"class="nav-link"routerLinkActive="active">SearchTask</Link>
                    </li>
                    <li>
                    <Link to="/SearchStatus"class="nav-link"routerLinkActive="active">SearchStatus</Link>
                    </li>

                    <li>
                    <Link to="/SearchPriority"class="nav-link"routerLinkActive="active">SearchPriority</Link>
                    </li>
                    <li>
                    <Link to="/SearchTname"class="nav-link"routerLinkActive="active">SearchTname</Link>
                    </li>
                    <li>
                    <Link to="/PostTask" class="btn btn-success mx-2"routerLinkActive="active">AddTask</Link>
                    </li>
                    <li>
                    <Link to="/Deletetask"class="btn btn-danger mx-2"routerLinkActive="active">DeleteTask</Link>
                    </li>

              </ul> 
          </nav>
            </div>
          

            <Routes>
                <Route path="/GetTaskdata" element={<GetTaskdata /> } />
               
                <Route path="/PostTask" element={<PostTask/> } />
                <Route path="/SetPriority" element={<SetPriority/> } />
                <Route path="/SetStatus" element={<SetStatus/>} />
                <Route path="/AssignTask" element={<AssignTask/>} />
                <Route path="/SetNotes" element={<SetNotes/>} />
                <Route path="/SetDescription" element={<SetDescription/>} />
                <Route path="/SetBookmark" element={<SetBookmark/>} />
                <Route path="/SearchTask" element={<SearchTask/>} />
                <Route path="/SearchStatus" element={<SearchStatus/>} />
                <Route path="/SearchPriority" element={<SearchPriority/>} />
                <Route path="/SearchTname" element={<SearchTname/>} />
                <Route path="/Deletetask" element={<Deletetask/>} />
               
               


            </Routes>
        
        
    </Router>
)
export default routing