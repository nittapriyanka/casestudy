import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { Userservice } from '../Userservice';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user!:Observable<user[]>
  user_ID!:number

  constructor(private uroService:Userservice,
    private router:Router) { }

  ngOnInit() {
    this.loadData()
  }

  loadData(){
    
    this.user=this.uroService.getUserList();
    
  }

  deleteUser(user_ID:number){
    this.uroService.deleteTask(user_ID)
    .subscribe(data=>{console.log(data);
                       this.loadData();},
                       error=>console.log(error))
    
  }

  userdetail(user_ID:number){
    this.router.navigate(['detail',user_ID]);
  } 

  updateuser(user_ID:number){
    this.router.navigate(['updates',user_ID]);
  }

}


