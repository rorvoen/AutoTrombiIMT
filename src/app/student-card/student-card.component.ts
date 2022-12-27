import { Component, Input } from '@angular/core';
import { IStudent } from '../model/student.model';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  @Input()
  student!: IStudent;
}
