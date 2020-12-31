import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvocationComponent } from './convocation.component';


const routes: Routes = [
  { path: '', component: ConvocationComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvocationRoutingModule { }
