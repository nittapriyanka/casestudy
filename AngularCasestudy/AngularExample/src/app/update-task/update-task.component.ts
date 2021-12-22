import { Component, OnInit } from '@angular/core';
import { Task } from '../Task'; 
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../TaskServices';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  task_ID!:number;
  task!:Task

  constructor(private route:ActivatedRoute, private router:Router,
    private taskService:TaskService) { }

  ngOnInit() {

    this.task = new Task();
    this.task_ID = this.route.snapshot.params['task_ID'];
    this.taskService.getTask(this.task_ID)
    .subscribe(data=>{
      console.log(data);
      this.task=data;
    },error=>console.log(error))
  }

  updateTasks(){
    this.taskService.updateTask(this.task_ID , this.task)
    .subscribe(data=>console.log(data), error=>console.log(error));
    this.task = new Task();
    this.gotoList();
  }

  onSubmit(){
    this.updateTasks();
  }
  
  gotoList(){
    this.router.navigate(['/tasks'])
  }

}