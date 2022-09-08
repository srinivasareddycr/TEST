import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import Student from 'src/app/Entity/Student';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  student: Student = new Student();
  students: Student[] = [];

  deleteRow(student: any, index: number) {
    const observable = this.studentService.deleteStudent(student);
    observable.subscribe((response:any) => {
      console.log(response);
      this.students.splice(index,1);
    });
  }

  deleteRows(student: any) {
    const observable = this.studentService.deleteStudent(student);
    observable.subscribe((response:any) => {
      console.log(response);
      this.students.splice(student);
    });
  }
  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    const promise = this.studentService.getStudents();
    promise.subscribe((response) => {  
    console.log(response);
      this.students = response as Student[];
  })
}

}
