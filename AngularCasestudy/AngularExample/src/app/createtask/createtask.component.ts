import { Component, OnInit } from '@angular/core';
import { Task } from '../Task'; 
import { TaskService } from '../TaskServices';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {

  task: Task = new Task();
  submitted=false;
  

  constructor(private troService:TaskService,private router:Router) { }

  ngOnInit() {
  }

  newProduct():void{
    this.submitted = false;
    this.task = new Task();
  }

  addSave(){
    this.troService.createTask(this.task)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.task=new Task();
    this.gotoList();
  }

  onSubmit(){
    this.submitted=true;
    this.addSave();
  }

  gotoList(){
    this.router.navigate(['/tasks'])
  }

}
