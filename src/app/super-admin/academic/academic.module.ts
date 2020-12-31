import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicComponent } from './academic.component';

import { AcademicRoutingModule } from './academic-routing.module';


@NgModule({
  declarations: [AcademicComponent],
  imports: [
    CommonModule,
    AcademicRoutingModule
  ]
})
export class AcademicModule { }
