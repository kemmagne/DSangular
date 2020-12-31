import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';


const routes: Routes = [
  { path: '', component: SuperAdminComponent },

  { path: 'classe', loadChildren: () => import(`./classe/classe.module`).then(m => m.ClasseModule) },


  { path: 'academic', loadChildren: () => import(`./academic/academic.module`).then(m => m.AcademicModule) },

  { path: 'period', loadChildren: () => import(`./period/period.module`).then(m => m.PeriodModule) },

  { path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },


  { path: 'student', loadChildren: () => import(`./student/student.module`).then(m => m.StudentModule) },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
