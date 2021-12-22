import { Component, OnInit } from '@angular/core';
import { user} from '../user'
import { Userservice } from '../Userservice'; 
import { FormGroup,FormControl } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-user-servvice',
  templateUrl: './post-user-servvice.component.html',
  styleUrls: ['./post-user-servvice.component.css']
})
export class PostUserServviceComponent implements OnInit {
 // [x: string]: any;
 // form:any;
  User:user=new user();

  username!:string
  password!:string

  constructor(private postuserservice:Userservice,private router:Router) { }

  ngOnInit(): void {
    /*this.form=new FormGroup({
      username:new FormControl(""),
      password:new FormControl("")

    });*/
  }

  

    validate(){
    this.postuserservice.uservalidate(this.username,this.password).subscribe(response=>{
      console.log(response);
     
      if(response == true)
      {
        alert("login sucessful!!");
        this.gotoList();
      }
      else{
        alert("user not found!!");
      }
    },error=>{
      
      console.log(error)});
  }

 //onSubmit(){
    //this.User=user
    //console.log(this.User)
    //this.validate();

  //}

  gotoList(){
    this.router.navigate(['/home'])
  }
}
