import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
/*import { ClasseComponent } from './classe/classe.component';
import { AcademicComponent } from './academic/academic.component';
import { PeriodComponent } from './period/period.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component'; */
import { SuperAdminComponent } from './super-admin.component';


@NgModule({
  declarations: [SuperAdminComponent/*, ClasseComponent, AcademicComponent, PeriodComponent, AdminComponent, StudentComponent*/],
  imports: [
    CommonModule,
    SuperAdminRoutingModule
  ]
})
export class SuperAdminModule { }
