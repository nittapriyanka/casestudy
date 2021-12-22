import {Component, OnInit} from "@angular/core";
import{FormGroup,FormControl,Validators} from "@angular/forms";


 @Component({
     selector:"com-task",
     templateUrl:'./task.html'

 })

 export  class Taskform implements OnInit{
     form:any
     taskid!:number
     name!:string
     owner_id!:number
     creator_id!:number
     description!:number
     status!:string
     notes!:string
     priority!:string
     isbook!:boolean
     createdon!:object
     statuschangedon!:object

     //num!:number
     
     ngOnInit(){
         this.form=new FormGroup({
             Task_ID:new FormControl(""),
             Owner_ID:new FormControl(""),
             Creator_ID:new FormControl(""),
             Name:new FormControl(""),
             Description:new FormControl(""),
             Status:new FormControl(""),
             Priority:new FormControl(""),
             Notes:new FormControl(""),
             IsBookmarked:new FormControl(""),
             Created_On:new FormControl(""),
             Status_Changed_On:new FormControl("")
        });
     }
     onSubmit(task: any) {
        console.log(task);
        
        //console.log(ownerid);

        this.taskid=task.Task_ID;
        this.name=task.Name;
        this.owner_id=task.Owner_ID;
        this.creator_id=task.Creator_ID;
        this.description=task.Description;
        this.status=task.Status;
        this.priority=task.priority;
        this.notes=task.Notes;
        this.isbook=task.IsBookmarked;
        this.createdon=task.Created_On;
        this.statuschangedon=task.Status_Changed_On;
        
        }
        
       
       
     }
     
  