import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

title = "Fill the below details :"

//Student = null as any;
editStudent = {
  firstName: "",
  lastName:"",
  studentClass:"",
  subject: "",
  dob:new Date()
}

student: Student = new Student();
students: Student[] = [];


save() {

  const observable = this.studentService.createStudent(this.student);
  observable.subscribe(
    (response: any) => {
      console.log(response);
   
    },
    function(error){
      console.log(error);
      alert("Something went wrong, Please try again!");
    }   
 )
 
}
 edit(student:any){
  this.editStudent = student;
 }



  constructor(public studentService: StudentService) {}
   

  ngOnInit(): void {
    const promise = this.studentService.getStudents();
    promise.subscribe((response) => {  
    console.log(response);
      this.students = response as Student[];
    })
 
}

register(registerForm: NgForm) {
  this.studentService.createTest(registerForm.value).subscribe(
    (resp) => {
      console.log(resp);
      registerForm.reset();
      this.getStudentsDetails();
      alert("Student Data Saved");
    },
    (err) => {
      console.log(err);
    }
  );
}

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

}
