import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import {RouterLinkWithHref} from "@angular/router";



@NgModule({
    declarations: [
        NavbarComponent,
        NavbarItemComponent
    ],
    exports: [
        NavbarComponent
    ],
  imports: [
    CommonModule,
    RouterLinkWithHref
  ]
})
export class NavbarModule { }
