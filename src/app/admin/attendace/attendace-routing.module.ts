import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendaceComponent } from './attendace.component';


const routes: Routes = [
  { path: '', component: AttendaceComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendaceRoutingModule { }
