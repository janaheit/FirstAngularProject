import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material/material.module";
import {NavbarModule} from "./navbar/navbar.module";
import { InputComponent } from './input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LineDataComponent } from './line-data/line-data.component';



@NgModule({
  declarations: [
    InputComponent,
    LineDataComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    LineDataComponent,
  ]
})
export class SharedModule { }
