import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
 export class Userservice{
     private baseUrl = "http://localhost:8080/users"

     constructor(private httpClient:HttpClient) { }

     uservalidate(username:string,password:string):Observable<Object>{
        return this.httpClient.get<boolean>(`${this.baseUrl}/${username}/${password}`);
     }

     getUserList():Observable<any>{
        return this.httpClient.get(this.baseUrl);
      }

      createUser(user:Object):Observable<Object>{
         return this.httpClient.post(this.baseUrl,user);
       }

      deleteTask(user_ID:number):Observable<any>{
         return this.httpClient.delete(`${this.baseUrl}/${user_ID}`,{responseType:'text'});
       }

       getUser(user_ID:number):Observable<any>{
         return this.httpClient.get(`${this.baseUrl}/${user_ID}`);
       }
     
       updateuser(user_ID:number,value:any):Observable<Object>{
         return this.httpClient.put(`${this.baseUrl}/${user_ID}`, value);
       }
    
 }  