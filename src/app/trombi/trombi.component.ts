import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-trombi',
  templateUrl: './trombi.component.html',
  styleUrls: ['./trombi.component.css']
})
export class TrombiComponent implements OnInit {

  listStudents: Student[] = [];

  constructor(
    protected studentService: StudentService,
  ) {}

  ngOnInit(): void {
      this.studentService.getStudents().subscribe((res) => {
        this.listStudents = res;
      });
  }
}
