import { Component, OnInit } from '@angular/core';
import { TaskService } from '../TaskServices';
import { Task } from '../Task';
import  { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-set-bookmark',
  templateUrl: './set-bookmark.component.html',
  styleUrls: ['./set-bookmark.component.css']
})
export class SetBookmarkComponent implements OnInit {
  tasks:any;
  task_ID!:number;
  isBookmarked!:Boolean;
  task!:Task;

  constructor(private route:ActivatedRoute, private router:Router,
    private taskService:TaskService) { }

  ngOnInit(): void {
  }

  book():void{
    this.taskService.book(this.task_ID, this.isBookmarked).
    subscribe(data=>console.log(data), error=>console.log(error));
    this.task = new Task();
    this.gotoList();
  }

  onSubmit(){
    this.book();
  }
  gotoList() {
    this.router.navigate(['/tasks'])
   
  }


}
