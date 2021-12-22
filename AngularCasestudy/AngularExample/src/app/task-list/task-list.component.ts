import { Component, OnInit } from '@angular/core';
import { Task } from '../Task'; 
import { TaskService } from '../TaskServices';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  task!:Observable<Task[]>
  task_ID !:number;

  constructor(private troService:TaskService,
    private router:Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    
    this.task=this.troService.getTaskList();
    
  }

  deleteTask(task_ID:number){
    this.troService.deleteTask(task_ID)
    .subscribe(data=>{console.log(data);
                       this.loadData();},
                       error=>console.log(error))
    
  }

  taskDetails(task_ID:number){
    this.router.navigate(['details',task_ID]);
  } 

  updateTask(task_ID:number){
    this.router.navigate(['update',task_ID]);
  }

}
