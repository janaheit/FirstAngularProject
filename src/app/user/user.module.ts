import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {UserRoutingModule} from "./user-routing.module";
import { UserViewComponent } from './page/user-view/user-view.component';
import { UserListComponent } from './page/user-list/user-list.component';
import {AppTableModule} from "../shared/table/app-table.module";
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './page/user/user.component';



@NgModule({
  declarations: [
    UserViewComponent,
    UserListComponent,
    UserFormComponent,
    UserComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        UserRoutingModule,
        AppTableModule,
    ]
})
export class UserModule { }
