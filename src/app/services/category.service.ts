import { Injectable } from '@angular/core';
import {Crud, CrudConfig} from "./crud";
import {User} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product.model";

const config: CrudConfig = {
  many: 'category',
  single: (id) => `category/${id}`
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends Crud<Product> {

  constructor(
    protected httpC: HttpClient,
  )
  {
    super(httpC, config);
  }
}
