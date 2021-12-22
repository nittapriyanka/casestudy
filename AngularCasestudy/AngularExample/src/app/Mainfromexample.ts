import{Component} from '@angular/core'

@Component({
    selector:"com-mainform",
    templateUrl:"./Form.html"
})

export class mainformexample {
    name!:string;
     onSubmit(value:any)
     {
         this.name=value.UserName;
         console.log(value);
     }
}
