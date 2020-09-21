import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students = [
    {Student_Id: 1, Name: "Tom", class:"10th", Subject: 'Che'},
    {Student_Id: 2, Name: 'Donny', class:"11th", Subject: 'Phy'},
    {Student_Id: 3, Name: 'Rober', class:"12th", Subject: 'Maths'},
    {Student_Id: 4, Name: 'Joe', calass: "9th", Subject: 'Eng'},
    {Student_Id: 5, Name: 'Albert', class: "5th", Subject: 'Hindi'},
    {Student_Id: 6, Name: 'Wolter', class: "12th", Subject: 'His'},
    {Student_Id: 7, Name: 'July', class: "10th", Subject: 'civ'},
    {Student_Id: 8, Name: 'Farkh', class: "8th", Subject: 'Poly'},
    {Student_Id: 9, Name: 'Sam', class: "6th", Subject: 'Eco'},
    {Student_Id: 10, Name: 'Smith', class: "7th", Subject: 'Bio'},
  ];
  
  studentHeader: string[] = ['Student_Id', 'Name', 'class', 'Subject'];
  constructor() { }

  ngOnInit(): void {
  }

}
