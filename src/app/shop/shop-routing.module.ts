import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ShopListComponent} from "./pages/shop-list/shop-list.component";
import {ProductViewComponent} from "./pages/product-view/product-view.component";
import {ProductComponent} from "./pages/product/product.component";

const routes: Routes = [
  {path: '', component: ShopListComponent},
  {path: ':id/detail', component: ProductViewComponent},
  {path: ':id/edit', component: ProductComponent},
  {path: 'add', component: ProductComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
