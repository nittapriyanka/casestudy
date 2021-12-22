
import { Component, OnInit } from "@angular/core";
import { EmployeeServiceService } from "./employee-service.service";
import { IEmployee } from "./employee";
@Component({
    selector:'app-employee-details',
    templateUrl:'./employee-details.component.html',
    
})


export class EmployeeDetailsComponent implements OnInit{

    public employees!: IEmployee[];
    constructor(private employeeservice:EmployeeServiceService){}

    ngOnInit(){
        this.employeeservice.getEmployees()
        .subscribe(data => this.employees=data)
    }
}