import { Injectable } from '@angular/core';
import {Crud, CrudConfig} from "./crud";
import {User} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserProduct} from "../models/user-product";
import {environment} from "../../environments/environment";
import {UserUpdateBasketForm} from "../models/basket-update";

const config: CrudConfig = {
  many: 'user',
  single: (id) => `user/${id}`
}

@Injectable({
  providedIn: 'root'
})
export class UserService extends Crud<User> {

  constructor(
    protected httpC: HttpClient,
  )
  {
    super(httpC, config);
  }

  getUserBasket(){
    return this.httpC.get<Array<UserProduct>>(environment.api.url + "user/basket")
  }

  updateUserBasket(basketForm: UserUpdateBasketForm){
    return this.httpC.put<Array<UserProduct>>(environment.api.url + "user/basket", basketForm);
  }
}
