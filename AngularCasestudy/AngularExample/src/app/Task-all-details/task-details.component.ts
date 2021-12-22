import{Component,OnInit} from '@angular/core'
import { TaskServiceService } from './task-service.service'
import { Itask } from './task'

@Component({
    selector:"com-tasklist",
    templateUrl:'./task-details.html'
})

export class TaskDetailsComponent implements OnInit{
    public tasks!: Itask[];

    constructor(private taskservice:TaskServiceService){}

    ngOnInit(){
        this.taskservice.getTasks()
        .subscribe(data=>this.tasks=data)
    }
}