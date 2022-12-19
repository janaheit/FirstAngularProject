import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopRoutingModule} from "./shop-routing.module";
import { ShopListComponent } from './pages/shop-list/shop-list.component';
import {AppTableModule} from "../shared/table/app-table.module";
import { ProductViewComponent } from './pages/product-view/product-view.component';
import {SharedModule} from "../shared/shared.module";
import { ProductComponent } from './pages/product/product.component';
import {UserModule} from "../user/user.module";
import { ProductFormComponent } from './components/product-form/product-form.component';



@NgModule({
  declarations: [
    ShopListComponent,
    ProductViewComponent,
    ProductComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    AppTableModule,
    SharedModule,
    UserModule,
  ]
})
export class ShopModule { }
