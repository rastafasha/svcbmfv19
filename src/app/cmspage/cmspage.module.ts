import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CmspageRoutingModule } from './cmspage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CmspageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ ]
})
export class CmspageModule { }
