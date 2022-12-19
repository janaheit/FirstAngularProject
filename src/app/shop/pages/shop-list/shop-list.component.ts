import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {ButtonType, TableConfig} from "../../../shared/table/models/table-config.model";
import {Entity} from "../../../models/entity.model";
import {AuthService, RightEnum} from "../../../services/auth.service";
import {Product} from "../../../models/product.model";
import {UserProduct} from "../../../models/user-product";
import {UserService} from "../../../services/user.service";
import {UserUpdateBasketForm} from "../../../models/basket-update";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  tableConfig: TableConfig;
  basket: UserProduct[];

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {

    this.userService.getUserBasket().subscribe((basket)=> {
      this.basket = basket;
      this.configureTable(basket);
    })

  }

  configureTable(basket: UserProduct[]){

    this.tableConfig = {
      columns : [
        {
          columnName: 'Id',
          value: 'id'
        },
        {
          columnName: 'Label',
          value: 'label'
        },
        {
          columnName: 'Price',
          value: 'price'
        },
        {
          columnName: 'Quantity',
          value: 'quantity'
        },
        {
          columnName: 'Category',
          value: 'category.label',

        },

      ],
      actions: [
        {
          actionName: 'detail',
          actionCb: (data: Entity) =>{
            this.router.navigate(['/items', data.id, 'detail'])
          },
          type: ButtonType.SUBMIT
        },
        {
          actionName: 'edit',
          actionCb: (data: Entity) =>{
            this.router.navigate(['/items', data.id, 'edit'])
          },
          type: ButtonType.SUCCESS
        },
        {
          actionName: 'add to basket',
          actionCb: (data: Product) =>{
            this.orderProduct(data, basket);
          },
          type: ButtonType.WARNING
        }
      ],
      findDataCb: () => this.productService.findAll(),
      create: {
        actionName: 'Create product',
        actionCb: () => this.router.navigate(['/items/add']),
        canCreate: this.authService.hasRight(RightEnum.ADMIN)
      }


    }
  }

  orderProduct(product: Product, basket: UserProduct[]){
    // call function to add to basket
    console.log("product before adding: ", product);
    // make User product
    let userProduct = new UserProduct();
    userProduct.productId = product.id;
    userProduct.categoryLabel = product.category.label;
    userProduct.quantity = 1;
    userProduct.label = product.label;

    /*let basket: UserProduct[] = []
    this.userService.getUserBasket()
      .subscribe((userProducts: UserProduct[]) => {
        basket = userProducts;
        console.log("subscribe" , basket);
      });

     */
    basket.push(userProduct);
    console.log("added to basket, no api call: ", basket);

    this.userService.updateUserBasket(new UserUpdateBasketForm(basket))
      .subscribe((basket)=>{
        console.log("added: ", basket);
      });
  }

}
