import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders,HttpErrorResponse } from "@angular/common/http";
import { Taskbean } from "./taskbean";
@Injectable({
    providedIn:'root'
})
export class PostmethodServices{
    postUrl: string ="http://localhost:8080/newtask";
    
    httpOptions={headers:new HttpHeaders({
        'Content-Type':'application/json','Authorization':'my-auth-token'
    })};

    constructor(private httpClient:HttpClient){}

    addPost(taskD:Taskbean){
        return this.httpClient.post(this.postUrl,taskD,this.httpOptions);
    }
}