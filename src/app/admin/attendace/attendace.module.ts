import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendaceRoutingModule } from './attendace-routing.module';
import { AttendaceComponent } from './attendace.component';


@NgModule({
  declarations: [AttendaceComponent],
  imports: [
    CommonModule,
    AttendaceRoutingModule
  ]
})
export class AttendaceModule { }
