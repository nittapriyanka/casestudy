import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private baseUrl = "http://localhost:8080/tasks";
  
  constructor(private httpClient:HttpClient) { }

  getTaskList():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  createTask(task:Object):Observable<Object>{
    return this.httpClient.post(this.baseUrl,task);
  }

  deleteTask(task_ID:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${task_ID}`,{responseType:'text'});
  }

  getTask(task_ID:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${task_ID}`);
  }

  updateTask(task_ID:number,value:any):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${task_ID}`, value);
  }

 searchTask(status:string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/status/${status}`);
  
 
}
  setaskid(task_ID:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tak/${task_ID}`);
  }

  seepriority(priority:string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/pri/${priority}`);
  }

  sename(name:string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/nam/${name}`)
  }

assign(task_ID:number,owner_ID:number):Observable<Object>{
  return this.httpClient.get(`${this.baseUrl}/${task_ID}/ow/${owner_ID}`);
}

book(task_ID:number, isBookmarked:Boolean):Observable<Object>{
  return this.httpClient.get(`${this.baseUrl}/${task_ID}/book/${ isBookmarked}`);
}
  
pri(task_ID:number,priority:string):Observable<Object>{
  return this.httpClient.get(`${this.baseUrl}/${task_ID}/uu/${priority}`);
}

}
