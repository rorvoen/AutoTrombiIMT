import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TrombiComponent } from './trombi/trombi.component';

const routes: Routes = [
  {
        path: 'trombi',
        component: TrombiComponent
    },
    {
        path: 'student-details/edit/:studentId',
        component: StudentDetailsComponent,
    },
    {
      path: 'student-details/new',
      component: StudentDetailsComponent,
  },
    {
        path: '**',
        redirectTo: 'trombi'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
