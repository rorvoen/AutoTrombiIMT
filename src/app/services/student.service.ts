import { IStudent } from "../model/student.model";
import * as StudentsJson from 'src/data/students.json';
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StudentService {
    students: IStudent[] = [];
    tempJSON = StudentsJson;

    getStudents(): Observable<IStudent[]> {
        if(this.students.length == 0) {
            this.students = this.tempJSON["students"];
        }
        return of(this.students);
    }

    saveStudent(student: IStudent) {
        this.students.push(student);
    }

    updateStudent(updatedStudent: IStudent) {
        this.students.map(student => {
            if(student.id === updatedStudent.id) {
                student = updatedStudent;
            }
        });
    }
}
