import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule }  from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent }  from './MyComponent'
import {MyComponentimage} from './MyComponentimage'
import {Componentfor}  from './Componentfor'
import { Mymodule } from './Mymodule';
import { RouterModule } from '@angular/router';

import { IfExample } from './IfExample';
import {Customdirective} from './Customdirective'
import { Productcomponent } from './Productcomponent';
import { Componentuser } from './Componentuser';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { mainformexample } from './Mainfromexample';
import { ReactiveFormsModule } from '@angular/forms';
import {ReactiveFormExample}  from './ReactiveFormExample'
import {SortPipe}       from './CustomSortPipe'
import {Taskform} from './Taskform'
import { MyserviceComponent } from './MyserviceComponent';
import {EmployeeDetailsComponent} from'./employee-details.component';
import { TaskDetailsComponent } from './Task-all-details/task-details.component';
import { PostExampleComponent } from './Postservice-example/post-example.component';
import { TaskPostserviceComponent } from './task-postservice/task-postservice.component';
import { PostExampleCasestudyComponent } from './Post-task-service/PostExampleCasestudy';
import { CreatetaskComponent } from './createtask/createtask.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { PostUserServviceComponent } from './post-user-servvice/post-user-servvice.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { SearchStatusComponent } from './search-status/search-status.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { SearchPriorityComponent } from './search-priority/search-priority.component';
import { SearchNameComponent } from './search-name/search-name.component';
import { SetBookmarkComponent } from './set-bookmark/set-bookmark.component';
import { SetPriorityComponent } from './set-priority/set-priority.component';



@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyComponentimage,
    Componentfor,
    IfExample,
    Customdirective,
    Productcomponent,
    Componentuser,
    SortPipe,
    PipeExampleComponent,
    mainformexample,
    ReactiveFormExample,
    Taskform,
    MyserviceComponent,
    EmployeeDetailsComponent,
    TaskDetailsComponent,
    PostExampleComponent,
    TaskPostserviceComponent,PostExampleCasestudyComponent, CreatetaskComponent, TaskListComponent, UpdateTaskComponent, PostUserServviceComponent, UserListComponent, CreateUserComponent, DeleteUserComponent, UpdateUserComponent, UserDetailsComponent, HomePageComponent, SearchTaskComponent, SearchStatusComponent, AssignTaskComponent, SearchPriorityComponent, SearchNameComponent, SetBookmarkComponent, SetPriorityComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,Mymodule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
