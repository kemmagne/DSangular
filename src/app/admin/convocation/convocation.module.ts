import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvocationComponent } from './convocation.component';

import { ConvocationRoutingModule } from './convocation-routing.module';


@NgModule({
  declarations: [ConvocationComponent],
  imports: [
    CommonModule,
    ConvocationRoutingModule
  ]
})
export class ConvocationModule { }
