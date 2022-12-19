import { Component, OnInit } from '@angular/core';
import {Product} from "../../../models/product.model";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-basket-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: Product;

  constructor(
    private basketService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];

    if(isNaN(id)){
      this.router.navigate(['/']);
    }

    this.basketService.find(id)
      .subscribe((product: Product) => {
        this.product = product;
      })
  }

}
