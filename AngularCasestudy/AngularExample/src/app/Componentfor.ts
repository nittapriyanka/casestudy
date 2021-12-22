import {Component} from '@angular/core';

@Component({
    selector:"com-for",
    template:`
    <div>
    <h1>list of fruits</h1>
    <ul *ngFor="let f of fruits">
    <li>{{ f.name }} <br> Rs{{f.price}}</li>
    </ul>
    </div>
    `
})




export class Componentfor{

    fruits=[
        {"name":"strawberry", "price":250},
        {"name":"blueberry","price":200},
        {"name":"apple","price":330}
]
}