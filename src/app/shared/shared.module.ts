import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material/material.module";
import {NavbarModule} from "./navbar/navbar.module";
import { InputComponent } from './input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    InputComponent
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
  ]
})
export class SharedModule { }
