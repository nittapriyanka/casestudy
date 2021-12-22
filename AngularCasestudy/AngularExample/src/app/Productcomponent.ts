import { Component} from "@angular/core";

@Component({
    selector:"com-pro",
    template:`
    <div>
    <h1>{{name}}</h1>
    
    <img src ="./assets/laptop.jpg" width="250px" height="100" alt="img">
    <h1>{{price}}</h1>
    <h1>list of products</h1>
    <ul *ngFor="let p of product">
    <li>{{ p.name }} <br> Rs {{p.price}}</li>
    </ul>
    </div>
    `
})

export class Productcomponent{
    name:string="HP"
    price:number=50000
    product=[
       { "name":"TV","price":30000},
       {"name":"Laptop","price":99999}
    ]
   
}