import { Component, OnInit } from '@angular/core';
import { Userservice } from '../Userservice';
import{user} from '../user'
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user:user=new user();
  submitted=false;

  constructor(private uroService:Userservice,private router:Router) { }

  ngOnInit(): void {
  }

  newUser():void{
    this.submitted = false;
    this.user = new user();
  }

  addSave(){
    this.uroService.createUser(this.user)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.user=new user();
    this.gotoList();
  }

  onSubmit(){
    this.submitted=true;
    this.addSave();
  }

  gotoList(){
    this.router.navigate(['/users'])
  }



}
