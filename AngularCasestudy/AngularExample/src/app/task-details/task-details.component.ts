import { Component, OnInit } from '@angular/core';
import { Task } from '../Task'; 
import { TaskService } from '../TaskServices';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task_ID!:number;
   task!:Task;

  constructor(private route:ActivatedRoute,
    private router:Router, private troService:TaskService) { }

  ngOnInit() {
    this.task=new Task();
    this.task_ID = this.route.snapshot.params['task_ID'];
    this.troService.getTask(this.task_ID) .subscribe(data=>{
      console.log(data);
      this.task=data;      
    },error=>console.log(error));
    
  
  }
  list(){
    this.router.navigate(['/tasks'])
  }

}
