import {Component, OnInit} from "@angular/core";
import{FormGroup,FormControl,Validators} from "@angular/forms";

@Component({
    selector:"validate",
    templateUrl:"./reactiveForm.html"
})

export class ReactiveFormExample implements OnInit{
    form:any;
    name!:string;
    ngOnInit(){
        this.form=new FormGroup({
            firstname:new FormControl(
                "",
                Validators.compose([Validators.required,Validators.minLength(3)])
            ),
            lastname:new FormControl(""),
            languages: new FormControl("")
            
        });
    }
    onSubmit(user: any) {
        console.log(user);
        this.name=user.firstname;
    }
 
}
