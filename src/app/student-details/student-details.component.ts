import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent, Student } from '../model/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: IStudent | undefined = {};

  studentForm = this.fb.group({
    surname: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    promotion: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    mailIMT: ['', [Validators.required, Validators.email]],
    mailPersonal: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    photoURL: ['', [Validators.required, Validators.pattern('^(https|http):\/\/.*')]],
    companyLogoURL: ['', [Validators.required, Validators.pattern('^(https|http):\/\/.*')]]
  });

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected fb: FormBuilder,
    protected studentService: StudentService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(
      (url) => {
      if(url[1].path == "edit"){
        this.activatedRoute.paramMap.subscribe(
          (params) => {
            const studentId = params.get('studentId');
            if(studentId){
              this.studentService.getStudentById(Number(studentId)).subscribe(
                (res) => {
                  this.student = res;
                  if(this.student){
                    this.fillFormWithStudent(this.student);
                  }
                })
            }
          }
        )
      }
    })
  }

  protected createStudentFromForm(): IStudent {
    return {
      ...new Student(),
      id: this.student?.id,
      surname: this.studentForm.get(['surname'])!.value,
      firstname: this.studentForm.get(['firstname'])!.value,
      gender: this.studentForm.get(['gender'])!.value,
      promotion: this.studentForm.get(['promotion'])!.value,
      birthdate: this.studentForm.get(['birthdate'])!.value,
      mailIMT: this.studentForm.get(['mailIMT'])!.value,
      mailPersonal: this.studentForm.get(['mailPersonal'])!.value,
      phone: this.studentForm.get(['phone'])!.value,
      photoURL: this.studentForm.get(['photoURL'])!.value,
      companyLogoURL: this.studentForm.get(['companyLogoURL'])!.value,
    };
  }

  protected fillFormWithStudent(student: IStudent): void {
    this.studentForm.patchValue({
      surname: student.surname,
      firstname: student.firstname,
      gender: student.gender,
      promotion: student.promotion,
      birthdate: student.birthdate,
      mailIMT: student.mailIMT,
      mailPersonal: student.mailPersonal,
      phone: student.phone,
      photoURL: student.photoURL,
      companyLogoURL: student.companyLogoURL,
    });
  }

  save(): void {
    if(this.student?.id){
      this.studentService.updateStudent(this.createStudentFromForm()).subscribe(() => {
        this.back();
      })
    } else {
      const newStudent = this.createStudentFromForm();
      newStudent.id = this.studentService.getNextStudentId();
      this.studentService.saveStudent(newStudent).subscribe(() => {
        this.back();
      })
    }

  }

  back(): void {
    this.router.navigate(["trombi"]);
  }
}
