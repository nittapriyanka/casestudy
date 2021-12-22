import { Component, OnInit } from '@angular/core';
import { Taskbean } from './taskbean'; 
import { PostmethodServices } from './Postmethod-Services';
import { FormGroup,FormControl,Validators } from "@angular/forms";

@Component({

  selector: 'app-post-example-casestudy',
  templateUrl: './post-example-casetudy.html',
  //styleUrls: ['./post-example-casestudy.component.css']
})
export class PostExampleCasestudyComponent implements OnInit {
  [x: string]: any;
  form:any;
  
  taskdata!:Taskbean;
  
     task_Id!:number
     
     owner_Id!:number
      creator_Id!:number
      name!:string
     description!:number
     status!:string
     notes!:string
     priority!:string
     isBookmarked!:boolean
     created_On!:object
     status_Changed_On!:object
  constructor(private postservice:PostmethodServices) { }

  ngOnInit(){
    this.form=new FormGroup({
      task_ID:new FormControl(""),
      owner_ID:new FormControl(""),
      creator_ID:new FormControl(""),
      name:new FormControl(""),
      description:new FormControl(""),
      status:new FormControl(""),
      priority:new FormControl(""),
      notes:new FormControl(""),
      isBookmarked:new FormControl(""),
      created_On:new FormControl(""),
      status_Changed_On:new FormControl("")
  });
  
  }
  onSubmit(task:any){
    
    this.taskdata=task
    console.log(this.taskdata)

    this.postservice.addPost(this.taskdata).subscribe(response=>console.log(response))

}

}