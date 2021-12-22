import{Injectable} from '@angular/core'
import{HttpClient } from '@angular/common/http';
import { Itask } from './task';
import{Observable} from 'rxjs'

@Injectable({
    providedIn:'root'
})

export class TaskServiceService{
    baseUrl:string = "http://localhost:8080/tasks"

    constructor(private http:HttpClient){}
        getTasks():Observable<Itask[]>
        {
            return this.http.get<Itask[]>(this.baseUrl);
        }
    }




