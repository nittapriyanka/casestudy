import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatetaskComponent } from './createtask/createtask.component'; 
import { TaskListComponent } from './task-list/task-list.component'; 
import { TaskDetailsComponent } from './task-details/task-details.component';
import { UpdateTaskComponent } from './update-task/update-task.component'; 
import { PostUserServviceComponent } from './post-user-servvice/post-user-servvice.component';
import { UserListComponent } from './user-list/user-list.component';
import {CreateUserComponent} from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import {  SearchTaskComponent} from './search-task/search-task.component';
import { SearchStatusComponent} from './search-status/search-status.component'
import {SearchPriorityComponent} from './search-priority/search-priority.component'
import {SearchNameComponent} from './search-name/search-name.component'
import { AssignTaskComponent} from './assign-task/assign-task.component'
import {SetBookmarkComponent} from './set-bookmark/set-bookmark.component'
import {SetPriorityComponent} from './set-priority/set-priority.component'
const routes: Routes = [
  
  {path:'',redirectTo:'login',pathMatch:'full' },
  {path:'home',component:HomePageComponent},
  {path:'tasks' , component:TaskListComponent},
  {path:'save' , component:CreatetaskComponent},
  {path: 'details/:task_ID', component:TaskDetailsComponent },
  {path:'update/:task_ID',component:UpdateTaskComponent},  
  {path:'login',component:PostUserServviceComponent},
  {path:'users',component:UserListComponent},
  {path:'usersave',component:CreateUserComponent},
  {path:'updates/:user_ID',component:UpdateUserComponent},
  {path:'detail/:user_ID',component:UserDetailsComponent},
  {path:'search',component:SearchTaskComponent},
  {path:'setid',component: SearchStatusComponent},
  {path:'searchpriority',component:SearchPriorityComponent},
  {path:'searchname',component:SearchNameComponent},
  {path:'asstask',component: AssignTaskComponent},
  {path:'bookmark',component:SetBookmarkComponent},
  {path:'prio',component:SetPriorityComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
