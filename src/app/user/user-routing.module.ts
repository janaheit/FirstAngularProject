import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./page/user-list/user-list.component";
import {UserComponent} from "./page/user/user.component";
import {UserViewComponent} from "./page/user-view/user-view.component";

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: ':id/edit', component: UserComponent },
  { path: ':id/detail', component: UserViewComponent },
  { path: 'add', component: UserComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
