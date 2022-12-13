import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./page/user-list/user-list.component";

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: ':id', component: UserListComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
