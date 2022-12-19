import { Component, OnInit } from '@angular/core';
import {Product} from "../../../models/product.model";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {Logger} from "../../../services/logger.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  edit:boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params["id"];
    Logger.log('edit product id ', id);

    if (!isNaN(id)){
      this.edit = true;
      this.productService.find(id)
        .subscribe((product: Product) => {
          this.product = product;
          Logger.log('find product', product);
        })
    }
  }

}
