import {Component} from '@angular/core';

@Component({
    selector:"my-com",
    template:`
    <div>
    <h1>welcome!!!  {{ name }}</h1>
    <ul *ngFor="let c of colors" >
    <li>{{ c }}</li>
    </ul>
    </div>
    `
})



export class MyComponent{
    name:string="sushma"
    colors=["blue","white","red","black"]
}