import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../TaskServices';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {
  
  //task!:Task;
  tasks!:any;
  status!:string;

  constructor(private route:ActivatedRoute,
    private router:Router, private troService:TaskService) { }

  ngOnInit(){}


searchTask():void{
 this.troService.searchTask(this.status).
 subscribe(data=>{this.tasks=data;
console.log(this.tasks)
},
err=>{
console.log(err)
});
}
}


