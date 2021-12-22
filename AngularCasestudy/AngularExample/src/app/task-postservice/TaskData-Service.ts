import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders,HttpErrorResponse } from "@angular/common/http";
import { taskpostdata } from "./taskpostdataObj";
@Injectable({
    providedIn:'root'
})
export class TaskDataService{
    postUrl:string ="http://localhost:8080/newtask";
    
    httpOptions={headers:new HttpHeaders({
        'Content-Type':'application/json','Authorization':'my-auth-token'
    })};

    constructor(private httpClient:HttpClient){}
    addPost(postD:taskpostdata){
        return this.httpClient.post(this.postUrl,postD,this.httpOptions)
    }
} 