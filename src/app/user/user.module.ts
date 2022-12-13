import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {UserRoutingModule} from "./user-routing.module";
import { UserViewComponent } from './page/user-view/user-view.component';
import { UserListComponent } from './page/user-list/user-list.component';



@NgModule({
  declarations: [
    UserViewComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
