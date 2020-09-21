import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})
export class EmployeComponent implements OnInit {
  employeeHeader: string[] = ['Employee_Id', 'Name', 'Position'];
  employee = [
    {Employee_Id: 2, Name: 'Joe', Position: "Marketing Maneger"},
    {Employee_Id: 3, Name: 'Mary', Position: "Digital Team"},
    {Employee_Id: 4, Name: 'Wolter', Position: "HR"},
    {Employee_Id: 5, Name: 'Bran', Position: "CEO"},
    {Employee_Id: 6, Name: 'Smith', Position: "MD"},
    {Employee_Id: 7, Name: 'Rock', Position: "Frontend Developer"},
    {Employee_Id: 8, Name: 'Robert', Position: "Backend Developer"},
    {Employee_Id: 9, Name: 'July', Position: "Java Developer"},
    {Employee_Id: 10, Name: 'Tom', Position: "UI developer"},
    {Employee_Id: 1, Name: 'John', Position: "Software developer"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
