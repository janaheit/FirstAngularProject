import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: 'user', loadChildren: () => import('./user/user.module')
      .then((m) => m.UserModule)
  },
  {
    path: 'items', loadChildren: () => import('./shop/shop.module')
      .then((m) => m.ShopModule)
  },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
