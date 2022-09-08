import { Component, OnInit } from '@angular/core';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
   Student = new Student();
  studentData: any = {} 
  sId = this.actRoute.snapshot.params['sId'];

// student: Student = new Student();
// students: Student[] = [];

// editStudent ={

//   sId:1,
//   firstName: "Sreeni",
//   lastName:  "Sreeni",
//   studentClass:  "Sreeni",
//   subject:  "Sreeni",
//   dob:  new Date(),
// }


 constructor(
   public studentService: StudentService ,
    public actRoute: ActivatedRoute,
    public router: Router,
    
    ) { this.getStudentsDetails();}



    ngOnInit(): void {
      const promise = this.studentService.getStudents();
      promise.subscribe((response) => {  
   console.log(response);
       this.studentData = response as Student[];
    })
 
   }
   getStudentsDetails() {
    this.studentService.getStudents().subscribe(
      (response : any) => {
        console.log(response);
        this.Student = response;
      },
      
      function(error: any){
        console.log(error);
        alert("Something went wrong, Please try again!");
      }   
    );
  }
    
    updateStudent(){
      if(window.confirm("Are you sure you want to save changes?")){
        this.studentService.updateStudent(this.sId, this.studentData).subscribe(
          (data: {}) => {
            this.router.navigate(['/student-display'])
          }
        )
      }    
    }

    
  backToDisplay(){
    this.router.navigate(['/student-display'])
    
  }
}
  
//    callAll(student: any) {
//      this.openModal();
//      this.edit(this.student);
//    }

 

//   edit(student: any){
//     this.editStudent = student;
//    }
   

//   updateStudent(){
//     this.studentService.updateStudents(this.editStudent).subscribe(
//       (resp) => {
//         console.log(resp);
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }
    
  
//   getStudentsDetails() {
//     this.studentService.getStudents().subscribe(
//       (response : any) => {
//         console.log(response);
//         this.students = response;
//       },
      
//       function(error: any){
//         console.log(error);
//         alert("Something went wrong, Please try again!");
//       }   
//     );
//   }

//   display = "none";
//   openModal() {
//     this.display = "block";
//   }
//   onCloseHandled() {
//     this.display = "none";
//   }

//   register(registerForm: NgForm) {
//     this.studentService.createTest(registerForm.value).subscribe(
//       (resp) => {
//         console.log(resp);
//         registerForm.reset();
//         this.getStudentsDetails();
//         alert("Student Data Saved");
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }
   





