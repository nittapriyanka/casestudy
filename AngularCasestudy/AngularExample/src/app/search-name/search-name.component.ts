import { Component, OnInit } from '@angular/core';
import { TaskService } from '../TaskServices';
import {Task} from '../Task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.css']
})
export class SearchNameComponent implements OnInit {
  tasks:any;
  name!:string;

  constructor(private route:ActivatedRoute,
    private router:Router, private troService:TaskService) { }

  ngOnInit() {
  }

  sename():void{
    this.troService.sename(this.name).
    subscribe(data=>{this.tasks=data;
   console.log(this.tasks)
   },
   err=>{
   console.log(err)
   });
   }

}
