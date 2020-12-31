import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
/*import { AttendaceComponent } from './attendace/attendace.component';
import { NoteComponent } from './note/note.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { ConvocationComponent } from './convocation/convocation.component';*/
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [AdminComponent /*, AttendaceComponent, NoteComponent, BulletinComponent, ConvocationComponent*/],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
