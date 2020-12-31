import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinComponent } from './bulletin.component';

import { BulletinRoutingModule } from './bulletin-routing.module';


@NgModule({
  declarations: [BulletinComponent],
  imports: [
    CommonModule,
    BulletinRoutingModule
  ]
})
export class BulletinModule { }
