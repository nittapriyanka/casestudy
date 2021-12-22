import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { TaskDataService } from './TaskData-Service';
import { taskpostdata} from './taskpostdataObj';

@Component({
  selector: 'app-task-postservice',
  templateUrl: './task-postservice.component.html',
  //styleUrls: ['./task-postservice.component.css']
})
export class TaskPostserviceComponent implements OnInit {
  //data!:string;
    form:any;
    taskpostdata!:taskpostdata;
    //resultData!:respdata;
    //public users:any = [];
    
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
 

  constructor(private taskdataservice:TaskDataService) { }

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
   
    onSubmit(task : any){
 
       //this.taskpostdata=new taskpostdata();

        //this.taskpostdata.task_ID=task.Task_ID;
       // this.taskpostdata.name=task.Name;
        //this.taskpostdata.owner_ID=task.Owner_ID;
        //this.taskpostdata.creator_ID=task.Creator_ID;
        //this.taskpostdata.description=task.Description;
        //this.taskpostdata.status=task.Status;
        //this.taskpostdata.priority=task.priority;
        //this.taskpostdata.notes=task.Notes;
        //this.taskpostdata.isBookmarked=task.IsBookmarked;
        //this.taskpostdata.created_On=task.Created_On;
        //this.taskpostdata.status_Changed_On=task.Status_Changed_On;
        this.taskdataservice.addPost(this.taskpostdata).subscribe(data  => {console.log(data);});
       // console.log(this.taskpostdata)
        
  
}

}


 

  



