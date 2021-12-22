import { Component, OnInit } from '@angular/core';
import { TaskService } from '../TaskServices';
import {Task} from '../Task';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-status',
  templateUrl: './search-status.component.html',
  styleUrls: ['./search-status.component.css']
})
export class SearchStatusComponent implements OnInit {
  tasks:any;
  task_ID!:number;
  

  constructor(private route:ActivatedRoute,
    private router:Router, private troService:TaskService) { }

  ngOnInit() {
    
      
  }

  setaskid():void{
    this.troService.setaskid(this.task_ID).subscribe(data=>{this.tasks=data;
      console.log(data);
    },
    err=>
    {
      console.log(err);
    });
  }
  

}
