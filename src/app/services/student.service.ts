import { IStudent, Student } from "../model/student.model";
import * as StudentsJson from 'src/data/students.json';
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StudentService {
    students: IStudent[] = [];
    tempJSON = StudentsJson;

    getStudents(): Observable<IStudent[]> {
        if(localStorage.getItem("students")) {
            this.students = JSON.parse(localStorage.getItem("students")!); // Cookies présents, on les récupères
        } else {
            this.students = this.tempJSON["students"]; // Cookies absents, on récupère les données de base dans le JSON
            this.saveStudentsToLocalStorage();
        }
        return of(this.students);
    }

    getStudentsByPromo(promo: string): Observable<IStudent[]> {
        let res: IStudent[] = [];
        this.students.map(student => {
            if(student.promotion == promo){
                res.push(student);
            }
        });
        return of(res);
    }

    getStudentById(id: number): Observable<IStudent|undefined> {
        if(this.students.length == 0) {
            this.students = this.tempJSON["students"];
        }
        return of(this.students.find((student) => { return student.id == id }));
    }

    getNextStudentId(): number {
        let highestId = -1;
        this.students.map(student => {
            if(student.id! > highestId){
                highestId = student.id!
            }
        })
        return highestId+1;
    }

    saveStudent(newStudent: IStudent): Observable<IStudent> {
        this.students.push(newStudent);
        this.saveStudentsToLocalStorage();
        return of(newStudent);
    }

    updateStudent(updatedStudent: IStudent): Observable<IStudent> {
        for(let i = 0; i<this.students.length; i++) {
            if(this.students[i].id == updatedStudent.id){
                this.students[i] = updatedStudent;
                this.saveStudentsToLocalStorage();
            }
        }
        return of(updatedStudent);
    }

    private saveStudentsToLocalStorage(): void {
        localStorage.setItem("students", JSON.stringify(this.students))
    }
}
