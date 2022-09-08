import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import Student from 'src/app/Entity/Student';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  student: Student = new Student();
  students: Student[] = [];

  getStudentsDetails() {
    this.studentService.getStudents().subscribe(
      (response : any) => {
        console.log(response);
        this.students = response;
      },
      
      function(error: any){
        console.log(error);
        alert("Something went wrong, Please try again!");
      }   
    );
  }

  

  constructor(public studentService: StudentService) {
    this.getStudentsDetails();
   }

  ngOnInit(): void {
    const promise = this.studentService.getStudents();
    promise.subscribe((response) => {  
    console.log(response);
      this.students = response as Student[];
    })

  }
}
