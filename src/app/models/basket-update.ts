import {UserProduct} from "./user-product";

export class UserUpdateBasketForm{
  basket: UserProduct[];

  constructor(basket:UserProduct[]) {
    this.basket = basket;
  }
}
