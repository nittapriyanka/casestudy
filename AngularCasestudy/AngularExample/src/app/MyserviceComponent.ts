import {Component} from '@angular/core'
import{Myservice} from "./Myservice";

@Component({
    selector:"com-myservice",
    template:`
    <div>
    <h1>{{name}}</h1>
    <h1>{{nums}}</h1>
    </div>
    `,
    providers:[Myservice]
    

})
 export class MyserviceComponent{
     name!:string;
     nums!:number;
     constructor(private sr:Myservice){
         this.name=sr.getName();
         this.nums=sr.getNum();
     }
 }
