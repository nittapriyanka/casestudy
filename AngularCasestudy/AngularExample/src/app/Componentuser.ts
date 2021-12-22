import  {Component} from '@angular/core'

@Component({
    selector:"com-user",
    template:`
    <div>
    <h1>list of users</h1>
    <ul *ngFor = "let u of users">
    <li>{{u.name}}</li>
    </ul>
    </div>
    `

})

export class Componentuser{
    users=[
        {"name":"Sushma"},
        {"name":"Andrew"},
        {"name":"Richie"}
    ]
}
