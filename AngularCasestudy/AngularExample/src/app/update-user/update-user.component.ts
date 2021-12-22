import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { Userservice } from '../Userservice';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user_ID!:number;
  user!:user

  constructor(private route:ActivatedRoute,private router:Router, private userService:Userservice) { }

  ngOnInit() {
    this.user = new user();
    this.user_ID = this.route.snapshot.params['user_ID'];
    this.userService.getUser(this.user_ID)
    .subscribe(data=>{
      console.log(data);
      this.user=data;
    },error=>console.log(error))
  }

  updateUsers(){
    this.userService.updateuser(this.user_ID , this.user)
    .subscribe(data=>console.log(data), error=>console.log(error));
    this.user = new user();
    this.gotoList();
  }

  onSubmit(){
    this.updateUsers();
  }
  
  gotoList(){
    this.router.navigate(['/users'])
  }


}
