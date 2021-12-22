import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { Userservice } from '../Userservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user_ID!:number;
  user!:user;

  constructor(private route:ActivatedRoute,
    private router:Router, private uroService:Userservice) { }

  ngOnInit() {
    this.user=new user();
    this.user_ID = this.route.snapshot.params['user_ID'];
    this.uroService.getUser(this.user_ID) .subscribe(data=>{
      console.log(data);
      this.user=data;      
    },error=>console.log(error));
  }

  list(){
    this.router.navigate(['/users'])
  }

}
