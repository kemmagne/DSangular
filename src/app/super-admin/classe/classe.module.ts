import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasseComponent } from './classe.component';

import { ClasseRoutingModule } from './classe-routing.module';


@NgModule({
  declarations: [ClasseComponent],
  imports: [
    CommonModule,
    ClasseRoutingModule
  ]
})
export class ClasseModule { }
